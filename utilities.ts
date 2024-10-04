const invalidBankNumber = /\D/

export const institutionNumberLength = 3
export const transitNumberLength = 5

/**
 * Zero-pads a number to a given length.
 * @param unformattedNumber - A number or a string representing a number.
 * @param numberLength - The number of digits in the result.
 * @returns A zero-padded string.
 */
export function formatBankNumber(
  unformattedNumber: string | number,
  numberLength: number
): `${number}` | undefined {
  // Ensure a number was passed
  if (
    (unformattedNumber as unknown) === undefined ||
    typeof unformattedNumber === 'object' ||
    unformattedNumber === ''
  ) {
    return undefined
  }

  let formattedNumber = unformattedNumber.toString()

  // Ensure the number isn't too long
  if (formattedNumber.length > numberLength) {
    return undefined
  }

  // Ensure the number only contains digits
  if (invalidBankNumber.test(formattedNumber)) {
    return undefined
  }

  formattedNumber = formattedNumber.padStart(numberLength, '0')

  return formattedNumber as `${number}`
}
