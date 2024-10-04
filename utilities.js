const invalidBankNumber = /\D/;
export const institutionNumberLength = 3;
export const transitNumberLength = 5;
export function formatBankNumber(unformattedNumber, numberLength) {
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
