import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { renderToString } from "react-dom/server";

export function printComponent(Component: React.ReactNode) {
  const content = renderToString(Component);
  console.log(content);

  const printWindow = window.open('', '', 'width=600');
  printWindow?.document.write(`
          <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="p-4">
          ${content}
        </body>
      </html>
`)
  printWindow?.document.close();
  if (printWindow) {
    printWindow.onload = function() {
    printWindow.print();   // Print the document
    printWindow.onafterprint = function() {
      printWindow.close(); // Close the window
    }
  };
}}



export async function createPDF(element: HTMLDivElement, name = 'document.pdf', download = false) {
  if (!element) return;
  const canvas = await html2canvas(element, {
    scale: 1, // Higher scale for better quality
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a5');

  const width = pdf.internal.pageSize.getWidth();
  const height = (canvas.height * width) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, width, height);

  if(download){
    pdf.save(name);
  } else {
    const blob = pdf.output('blob');
    return new File([blob], name, { type: blob.type });
  }
}