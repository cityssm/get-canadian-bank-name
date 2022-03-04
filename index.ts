import { institutions } from "./institutions.js";


export const getCanadianBankName = (institutionNumber: string | number, transitNumber?: string | number): string => {

  let bankName: string;

  const institutionNumberString = ("000" + institutionNumber.toString()).slice(-3);

  if (transitNumber) {
    const transitNumberString = ("00000" + transitNumber.toString()).slice(-5);
    bankName = institutions[transitNumberString + "-" + institutionNumberString] as string;
  }

  if (!bankName) {
    bankName = institutions[institutionNumberString] as string;
  }

  return bankName;
};


export default getCanadianBankName;
