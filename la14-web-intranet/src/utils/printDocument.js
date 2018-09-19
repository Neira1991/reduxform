import * as JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const printDocument = () => {
  const input = document.getElementById('divToPrint');
  html2canvas(input).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new JsPDF();
    pdf.addImage(imgData, 'JPEG', 10, 10, 190, 150);
    pdf.save('download.pdf');
  });
};

export default printDocument;
