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
export default function getCanadianBankName(
  institutionNumber: string | number,
  transitNumber: string | number = '00000'
): string | undefined {
  // eslint-disable-next-line @typescript-eslint/init-declarations
  let bankName: string | undefined

  const institutionNumberString = formatBankNumber(institutionNumber, 3)

  if (institutionNumberString === undefined) {
    return undefined
  }

  const transitNumberString = formatBankNumber(transitNumber ?? '', 5)

  if (transitNumberString !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bankName = institutions[`${transitNumberString}-${institutionNumberString}`]
  }

  if (bankName === undefined) {
    bankName = institutions[`00000-${institutionNumberString}`] as string
  }

  return bankName
}

export { institutionCommonNames } from './institutions.js'