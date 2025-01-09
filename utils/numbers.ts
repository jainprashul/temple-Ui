
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


export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
}
