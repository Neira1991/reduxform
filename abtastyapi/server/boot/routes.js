const bodyParser = require('body-parser');
const Util = require('../../utils/index');

module.exports = app => {
  app.use(
    bodyParser.json({
      limit: '100kb'
    })
  );

  // cambiar clave
  app.post('/change-password', async (req, res, next) => { // eslint-disable-line
    if (!req.query.accessToken)
      return res.status(402).send({ error: 'accessToken es requerido' });

    if (!Util.validateKeys(['newPassWord'], req.body))
      return res.status(402).send({ error: 'newPassWord es requerido' });

    // Obtengo el objeto token
    const accessToken = app.models.AccessToken;
    let accessTokenInstance = null;
    try {
      accessTokenInstance = await accessToken.findById(req.query.accessToken);
    } catch (error) {
      return next(error);
    }
    if (accessTokenInstance === null)
      return res.status(401).send({ error: 'El token no es valido' });

    // Obtengo el usuario
    const myUser = app.models.MyUser;
    let myUserInstance = null;
    try {
      myUserInstance = await myUser.findById(accessTokenInstance.userId);
    } catch (error) {
      return next(error);
    }
    if (myUserInstance === null)
      return res.status(500).send({
        error: `El usuario con el id ${accessTokenInstance.userId} no existe`
      });

    // Actualizo la clave
    try {
      await myUserInstance.updateAttribute('password', req.body.newPassWord);
      return res.status(200).send({ changed: true });
    } catch (error) {
      return next(error);
    }
  });

  // cerrar sesion
  app.get('/logout', (req, res, next) => {
    if (!req.query.accessToken) return res.sendStatus(401); // return 401:unauthorized if accessToken is not present
    const myUser = app.models.MyUser;
    myUser.logout(req.query.accessToken, err => {
      if (err) return next(err);
      return res.status(200).send({ logguedOut: true }); // on successful logout
    });
    return null;
  });
};
