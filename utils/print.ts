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


export function convertAmountIntoWords(num: number) {
  const ones: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens: string[] = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands: string[] = ["", "Thousand", "Million", "Billion", "Trillion"];

  // Helper function to convert numbers less than 1000
  function convertHundreds(n: number): string {
    if (n === 0) return "";
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "");
    return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + convertHundreds(n % 100) : "");
  }

  // Main conversion function
  if (num === 0) return "Zero";

  let result = "";
  let idx = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = convertHundreds(num % 1000) + " " + thousands[idx] + " " + result;
    }
    num = Math.floor(num / 1000);
    idx++;
  }

  return result.trim();

}

convertAmountIntoWords(1300);