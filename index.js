import { institutions } from "./institutions.js";
const invalidBankNumber = /\D/;
const formatBankNumber = (unformattedNumber, numberLength) => {
    if (typeof (unformattedNumber) === "undefined") {
        return false;
    }
    let formattedNumber = unformattedNumber.toString();
    if (formattedNumber.length > numberLength) {
        return false;
    }
    if (invalidBankNumber.test(formattedNumber)) {
        return false;
    }
    formattedNumber = ("00000" + formattedNumber).slice(-1 * numberLength);
    return formattedNumber;
};
export const getCanadianBankName = (institutionNumber, transitNumber) => {
    let bankName;
    const institutionNumberString = formatBankNumber(institutionNumber, 3);
    if (!institutionNumberString) {
        return undefined;
    }
    const transitNumberString = formatBankNumber(transitNumber, 5);
    if (transitNumberString) {
        bankName = institutions[transitNumberString + "-" + institutionNumberString];
    }
    if (!bankName) {
        bankName = institutions[institutionNumberString];
    }
    return bankName;
};
export default getCanadianBankName;
