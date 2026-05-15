/**
 * Formats a Date object into a human-readable string (YYYY-MM-DD).
 * @param date - The date to format.
 * @returns A string in YYYY-MM-DD format.
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return date.toLocaleDateString(locale, { year: "numeric", month: "2-digit", day: "2-digit" });
}

/**
 * Calculates the total sum of an array of numbers.
 * @param items - An array of numbers to sum.
 * @returns The total sum as a number.
 */
export function calculateTotal(prices: number[], discountRate: number = 0): number {
  return prices.reduce((acc, price) => acc + price * (1 - discountRate), 0);
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(n: number, lower: number, upper: number): number {
  return Math.min(Math.max(n, lower), upper);
}
