/**
 * Lower case first char of string
 * @param str
 */
export function lcFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1, str.length);
}

/**
 * Upper case first char of string
 * @param str
 */
export function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
