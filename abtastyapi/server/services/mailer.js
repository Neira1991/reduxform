const nodemailer = require('nodemailer');

class Mailer {
  constructor() {
    this.nodeMailer = nodemailer;
  }

  /**
   * Funcion encargada de crear una cuenta random
   *
   * @returns {Promise}
   * @memberof Mailer
   */
  createAccount() {
    return new Promise((resolve, reject) => {
      this.nodeMailer.createTestAccount((err, account) => {
        if (err) return reject(err);
        return resolve(account);
      });
    });
  }

  /**
   * Funcion encargada de crear el transporter para enviar el correo
   *
   * @returns {Promise}
   * @memberof Mailer
   */
  createTransporter() {
    /* eslint-disable space-before-function-paren */
    return new Promise(async (resolve, reject) => {
      /* eslint-enable space-before-function-paren  */
      try {
        const transporter = this.nodeMailer.createTransport({
          host: process.env.SMTP_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PW
          }
        });
        resolve(transporter);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Funcion Encargada de enviar email
   *
   * @param {Array} emails
   * @param {string} stringHtml
   * @param {string} [subject='']
   * @param {string} [text='']
   * @param {Array} [attachments=[]]
   * @returns {Promise}
   * @memberof Mailer
   */
  sendMail(emails, stringHtml, subject = '', text = '', attachments = []) {
    /* eslint-disable space-before-function-paren */
    return new Promise(async (resolve, reject) => {
      /* eslint-enable space-before-function-paren */
      let transporter = null;
      try {
        transporter = await this.createTransporter();
      } catch (error) {
        reject(error);
      }
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'stevencali9113@gmail.com',
        subject,
        text,
        html: stringHtml,
        attachments
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) return reject(err);
        console.log('Message sent: %s', info.messageId);
        return resolve(info);
      });
    });
  }
}

module.exports = Mailer;
