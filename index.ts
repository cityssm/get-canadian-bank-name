import { institutions } from './institutions.js'
import {
  formatBankNumber,
  institutionNumberLength,
  transitNumberLength
} from './utilities.js'

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

  const institutionNumberString = formatBankNumber(
    institutionNumber,
    institutionNumberLength
  )

  if (institutionNumberString === undefined) {
    return undefined
  }

  const transitNumberString = formatBankNumber(
    transitNumber,
    transitNumberLength
  )

  if (transitNumberString !== undefined) {
    bankName = institutions[`${transitNumberString}-${institutionNumberString}`]
  }

  if (bankName === undefined) {
    bankName = institutions[`00000-${institutionNumberString}`]
  }

  return bankName
}

export { institutionCommonNames } from './institutions.js'
