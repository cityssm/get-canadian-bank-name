import { institutions } from './institutions.js';
import { formatBankNumber, institutionNumberLength, transitNumberLength } from './utilities.js';
export default function getCanadianBankName(institutionNumber, transitNumber = '00000') {
    let bankName;
    const institutionNumberString = formatBankNumber(institutionNumber, institutionNumberLength);
    if (institutionNumberString === undefined) {
        return undefined;
    }
    const transitNumberString = formatBankNumber(transitNumber, transitNumberLength);
    if (transitNumberString !== undefined) {
        bankName = institutions[`${transitNumberString}-${institutionNumberString}`];
    }
    if (bankName === undefined) {
        bankName = institutions[`00000-${institutionNumberString}`];
    }
    return bankName;
}
export { institutionCommonNames } from './institutions.js';
