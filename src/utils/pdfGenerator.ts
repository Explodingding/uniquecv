import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generatePDF = async (elementId: string, filename: string = 'cv.pdf'): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 1.5, // Lepsza jakość, mniejszy rozmiar niż 2
      useCORS: true,
      logging: false,
    });

    // JPEG zamiast PNG, quality 0.85
    const imgData = canvas.toDataURL('image/jpeg', 0.85);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}; 