import { institutions } from './institutions.js';
const invalidBankNumber = /\D/;
function formatBankNumber(unformattedNumber, numberLength) {
    if (unformattedNumber === undefined ||
        typeof unformattedNumber === 'object' ||
        unformattedNumber === '') {
        return undefined;
    }
    let formattedNumber = unformattedNumber.toString();
    if (formattedNumber.length > numberLength) {
        return undefined;
    }
    if (invalidBankNumber.test(formattedNumber)) {
        return undefined;
    }
    formattedNumber = formattedNumber.padStart(numberLength, '0');
    return formattedNumber;
}
export default function getCanadianBankName(institutionNumber, transitNumber = '00000') {
    let bankName;
    const institutionNumberString = formatBankNumber(institutionNumber, 3);
    if (institutionNumberString === undefined) {
        return undefined;
    }
    const transitNumberString = formatBankNumber(transitNumber ?? '', 5);
    if (transitNumberString !== undefined) {
        bankName = institutions[`${transitNumberString}-${institutionNumberString}`];
    }
    if (bankName === undefined) {
        bankName = institutions[`00000-${institutionNumberString}`];
    }
    return bankName;
}
export { institutionCommonNames } from './institutions.js';
