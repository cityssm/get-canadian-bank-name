import { institutions } from './institutions.js'

const invalidBankNumber = /\D/

function formatBankNumber(
  unformattedNumber: string | number,
  numberLength: number
): string | undefined {
  // Ensure a number was passed
  if (
    unformattedNumber === undefined ||
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

  return formattedNumber
}

/**
 * @param institutionNumber - A three-digit Canadian bank institution number.
 * @param [transitNumber] - A five-digit Canadian bank transit (branch) number.
 * @returns - A Canadian bank name.
 */
export function getCanadianBankName(institutionNumber: string | number,
  transitNumber?: string | number): string | undefined {
  let bankName: string | undefined

  const institutionNumberString = formatBankNumber(institutionNumber, 3)

  if (institutionNumberString === undefined) {
    return undefined
  }

  const transitNumberString = formatBankNumber(transitNumber ?? '', 5)

  if (transitNumberString !== undefined) {
    bankName = institutions[`${transitNumberString}-${institutionNumberString}`]
  }

  if (bankName === undefined) {
    // eslint-disable-next-line security/detect-object-injection
    bankName = institutions[institutionNumberString] as string
  }

  return bankName
}

export default getCanadianBankName
