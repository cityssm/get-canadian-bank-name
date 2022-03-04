import { institutions } from "./institutions.js";


const invalidBankNumber = /\D/;

const formatBankNumber = (unformattedNumber: string | number, numberLength: number): string | false => {

  // Ensure a number was passed
  if (typeof(unformattedNumber) === "undefined") {
    return false;
  }

  let formattedNumber = unformattedNumber.toString();

  // Ensure the number isn't too long
  if (formattedNumber.length > numberLength) {
    return false;
  }

  // Ensure the number only contains digits
  if (invalidBankNumber.test(formattedNumber)) {
    return false;
  }

  formattedNumber = ("00000" + formattedNumber).slice(-1 * numberLength);

  return formattedNumber;
};


/**
 * @param {(string|number)} institutionNumber - A three-digit Canadian bank institution number.
 * @param {(string|number)} [transitNumber] - A five-digit Canadian bank transit (branch) number.
 * @returns {string} - A Canadian bank name.
 */
export const getCanadianBankName = (institutionNumber: string | number, transitNumber?: string | number): string => {

  let bankName: string;

  const institutionNumberString = formatBankNumber(institutionNumber, 3);

  if (!institutionNumberString) {
    return undefined;
  }

  const transitNumberString = formatBankNumber(transitNumber, 5);

  if (transitNumberString) {
    bankName = institutions[transitNumberString + "-" + institutionNumberString] as string;
  }

  if (!bankName) {
    bankName = institutions[institutionNumberString] as string;
  }

  return bankName;
};


export default getCanadianBankName;
