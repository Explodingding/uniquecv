import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generateExport = async (
  elementId: string,
  format: 'jpg' | 'pdf' = 'jpg',
  width: number = 1200,
  height: number = 1700,
  filename: string = 'cv'
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 1.5,
      width,
      height,
      useCORS: true,
      logging: false,
    });

    if (format === 'jpg') {
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const imgData = canvas.toDataURL('image/jpeg', 0.85);
      const pdf = new jsPDF({
        orientation: width > height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [width, height],
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save(`${filename}.pdf`);
    }
  } catch (error) {
    console.error('Error generating export:', error);
    throw error;
  }
}; 