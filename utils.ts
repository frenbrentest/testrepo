/**
 * Formats a Date object into a locale-specific date string.
 * @param date - The date to format.
 * @param locale - Optional locale string (default "en-US").
 * @returns A string representing the date in the specified locale.
 */
/**
 * Formats an array of prices as strings with two decimal places.
 * @param prices - An array of numbers representing prices.
 * @param discountRate - (Deprecated) This parameter is no longer used.
 * @returns An array of formatted price strings.
 */
/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 */

/**
 * Formats a Date object into a human-readable string (YYYY-MM-DD).
 * @param date - The date to format.
 * @returns A string in YYYY-MM-DD format.
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return date.toLocaleDateString(locale);
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
  return prices.map((price) => `${price.toFixed(2)}`);
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(n: number, lower: number, upper: number): number {
  return Math.max(Math.min(n, lower), upper);
}



