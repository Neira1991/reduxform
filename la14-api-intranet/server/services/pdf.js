const pdf = require('html-pdf');

class Pdf {
  constructor() {
    this.pdfInstance = pdf;
  }

  createFilePdf(html, options, path) {
    return new Promise((resolve, reject) => {
      this.pdfInstance.create(html, options).toFile(path, (err, res) => {
        if (err) return reject(err);
        console.log('res', res);
        return resolve(res);
      });
    });
  }

  createStreamPdf(html, options) {
    return new Promise((resolve, reject) => {
      this.pdfInstance.create(html, options).toStream((err, stream) => {
        if (err) return reject(err);
        return resolve(stream);
      });
    });
  }
}

module.exports = Pdf;
