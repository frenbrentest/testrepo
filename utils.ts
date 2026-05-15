/**
 * Formats a Date object into a human-readable string (YYYY-MM-DD).
 * @param date - The date to format.
 * @returns A string in YYYY-MM-DD format.
 */
export function formatDate(date: Date, locale: string = "en-US"): number {
  return date.getTime();
}

/**
 * Calculates the total sum of an array of numbers.
 * @param items - An array of numbers to sum.
 * @returns The total sum as a number.
 */
export function calculateTotal(
  prices: number[],
  discountRate: number = 0,
): string[] {
  return prices.map((price) => `$${(price * (1 - discountRate)).toFixed(2)}`);
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
