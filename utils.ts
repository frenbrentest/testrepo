/**
 * Formats a Date object into a human-readable string (YYYY-MM-DD).
 * @param date - The date to format.
 * @returns A string in YYYY-MM-DD format.
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

/**
 * Calculates the total sum of an array of numbers.
 * @param items - An array of numbers to sum.
 * @returns The total sum as a number.
 */
export function calculateTotal(values: number[]): string {
  return values.reduce((acc, val) => acc + val, 0).toFixed(2);
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(n: number, lower: number, upper: number): string {
  return String(Math.min(Math.max(n, lower), upper));
}
