const app = require('../../server/server');
const Mailer = require('../../server/services/mailer');
const sgMail = require('@sendgrid/mail');
const integrationIndicadores = require('../../integrations/indicadores/index');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

module.exports = function(MyUser) {
  const myUserParam = MyUser;
  // Declaro el metodo
  myUserParam.getUserByToken = async (req, cb) => { // eslint-disable-line

    const accesToken = app.models.AccessToken;
    // Obtengo la instancia del token
    let accesTokenInstace = null;
    try {
      accesTokenInstace = await accesToken.findById(req.accessToken.id);
    } catch (error) {
      return cb(error);
    }

    // Valido si la instancia es nula
    if (accesTokenInstace === null) {
      return cb(`la instancia Token con el id ${req.accessToken.id} es nula.`);
    }

    // Obtengo la instancia del usuario
    let myUserInstance = null;
    try {
      myUserInstance = await myUserParam.findOne({
        where: { id: accesTokenInstace.userId }
      });
    } catch (error) {
      return cb(error);
    }

    // Valido si la instancia es nula
    if (myUserInstance === null) {
      return cb(
        `la instancia MyUser con el id ${accesTokenInstace.userId} es nula.`
      );
    }

    cb(null, myUserInstance);
  };

  // Publico el metodo
  myUserParam.remoteMethod('getUserByToken', {
    description: 'Retorna el usuario mediante el tokenId',
    accepts: [
      {
        arg: 'req',
        type: 'object',
        http: { source: 'req' }
      }
    ],
    http: {
      verb: 'get',
      path: '/user-by-token'
    },
    returns: {
      arg: 'my-user',
      type: 'MyUser',
      root: true,
      description: 'my-user instance'
    }
  });

  // Envia el link para cambio de contraseña cuando es requerido
  myUserParam.on('resetPasswordRequest', async info => {
    const locationHbs = path.resolve(__dirname, '../../templates/pw-reset.hbs');

    const templateHbs = hbs.compile(fs.readFileSync(locationHbs, 'utf8'));

    const htmlHbs = new hbs.handlebars.SafeString(
      templateHbs({ url: '', token: info.accessToken.id })
    );

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: info.email,
      from: 'no-reply@la14.com',
      subject: 'La14 -  Cambiar contraseña',
      text: 'la 14 te da más',
      html: htmlHbs.string
    };

    sgMail
      .send(msg)
      .then(() => console.log(`send to ${info.email}`))
      .catch(err => console.log(`error: ${err}`));
  });

  myUserParam.consultarIndicadores = cb => {
    integrationIndicadores
      .consultarIndicadores()
      .then(res =>
        cb(null, [
          { name: 'COP', value: Math.floor(res.rates.COP) },
          {
            name: 'EUR',
            value: Math.floor(1 / res.rates.EUR * res.rates.COP)
          }
        ])
      )
      .catch(err => cb(err));
  };

  myUserParam.remoteMethod('consultarIndicadores', {
    description: 'Retorna la informacion de los indicadores economicos',
    http: {
      verb: 'get',
      path: '/consultar-indicadores'
    },
    returns: {
      type: 'objeto',
      root: true,
      description: 'informacion de los indicadores'
    }
  });

  myUserParam.sendEmailBirthDay = async data => {
    let userInstance = null;
    let fromUser = null;
    try {
      userInstance = await myUserParam.findById(data.id);
      fromUser = await myUserParam.findById(data.fromId);
    } catch (error) {
      throw error;
    }
    // Valido
    if (userInstance === null)
      throw new Error(`El usuario ${data.id} no existe`);

    // Defino la ruta de la plantilla
    const locationEmail = path.resolve(
      __dirname,
      '../../templates/birthday.hbs'
    );

    const templateHbs = hbs.compile(fs.readFileSync(locationEmail, 'utf8'));

    // obtengo la url base de las imagenes para la plantilla
    const baseUrlImages = process.env.BASE_URL_EMAILS_IMAGES;

    // genero el html
    const htmlHbs = new hbs.handlebars.SafeString(
      templateHbs({
        text: data.text,
        user: userInstance,
        fromUser,
        iconLa14: `${baseUrlImages}/horizontal-logo.png`,
        iconFacebook: `${baseUrlImages}/facebook.png`,
        iconInstagram: `${baseUrlImages}/instagram.png`,
        iconYoutube: `${baseUrlImages}/youtube.png`
      })
    );

    // Obtengo el subject
    const subject = process.env.SUBJECT_WELCOME_USER || 'LA 14 - Bienvenido';

    // Envio el correo
    const mailerObject = new Mailer();
    try {
      await mailerObject.sendMail(
        [userInstance.email],
        htmlHbs.string,
        subject
      );
    } catch (error) {
      throw error;
    }

    return { sent: true };
  };
  myUserParam.remoteMethod('sendEmailBirthDay', {
    accepts: {
      arg: 'data',
      type: 'Object',
      require: true
    },
    http: {
      verb: 'post',
      path: '/send-birthday-email'
    },
    returns: {
      arg: 'data',
      type: 'Object'
    },
    description: 'Modelo para enviar mensaje de cumpleaños'
  });
};
