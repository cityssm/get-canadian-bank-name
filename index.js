import { institutions } from "./institutions.js";
export const getCanadianBankName = (institutionNumber, transitNumber) => {
    let bankName;
    const institutionNumberString = ("000" + institutionNumber.toString()).slice(-3);
    if (transitNumber) {
        const transitNumberString = ("00000" + transitNumber.toString()).slice(-5);
        bankName = institutions[transitNumberString + "-" + institutionNumberString];
    }
    if (!bankName) {
        bankName = institutions[institutionNumberString];
    }
    return bankName;
};
export default getCanadianBankName;
