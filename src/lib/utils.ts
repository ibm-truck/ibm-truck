import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Generates a class name string by merging multiple class values.
 *
 * @param {...ClassValue[]} inputs - The class values to be merged.
 * @return {string} - The merged class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Truncates a string to a specified length.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @return {string} The truncated string.
 */
export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

/**
 * Replaces spaces in a string with hyphens and converts it to lowercase.
 *
 * @param {string} str - The input string to modify.
 * @return {string} The modified string with spaces replaced by hyphens and converted to lowercase.
 */
export function sluggify(str: string) {
  return str.replaceAll(' ', '-').toLowerCase();
}

/**
 * Converts a slug string to its original form by replacing dashes with spaces and decoding URI components.
 *
 * @param {string} str - The slug string to be converted.
 * @return {string} The original string after converting the slug.
 */
export function unsluggify(str: string) {
  return decodeURIComponent(str.replaceAll('-', ' '));
}

/**
 * Formats a Nigerian price by adding thousands separators and the Nigerian Naira symbol.
 *
 * @param {number | string} price - The price to be formatted.
 * @return {string} - The formatted price with the Nigerian Naira symbol.
 */
export function formatNigerianPrice(price: number | string) {
  // Check if the input is a valid number
  if (isNaN(+price)) {
    return '₦ 0.00';
  }

  // Convert the price to a string and split it into whole and decimal parts
  const priceParts = Number(price).toFixed(2).toString().split('.');

  // Format the whole part with commas as thousands separators
  const wholePart = priceParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine the whole and decimal parts with a period separator
  const formattedPrice = `${wholePart}.${priceParts[1]}`;

  return `₦ ${formattedPrice}`; // Add the Nigerian Naira (₦) symbol
}

/**
 * Formats a number by adding commas as thousands separators.
 *
 * @param {number} num - The number to format.
 * @return {string} The formatted number as a string.
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Formats a string into an acceptable phone number.
 *
 * @param {string} input - The phonenumber to format.
 * @return {string} The formatted number as a string.
 */
export function formatPhoneNumber(input: string) {
  let phoneNumber = input;

  if (phoneNumber.length === 10) {
    phoneNumber = `0${phoneNumber}`;
  }

  if (phoneNumber.startsWith('+234')) {
    return phoneNumber;
  } else if (phoneNumber.startsWith('0')) {
    return '+234' + phoneNumber.slice(1);
  } else {
    return 'Invalid phone number format';
  }
}

/**
 * Formats a string into an acceptable phone number.
 *
 * @param {string} currency - The string to format
 * @return {number} The string comes out as a number.
 */
export function convertCurrencyToNumber(currency: string) {
  // Remove the currency symbol (₦) and commas
  const cleanedString = currency.replace(/[₦,]/g, '');
  // Convert the cleaned string to a number
  const number = parseFloat(cleanedString);
  return number;
}
