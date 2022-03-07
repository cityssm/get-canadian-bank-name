import * as assert from "assert";

import { getCanadianBankName } from "../index.js";


describe("Bank of Montreal (001)", () => {

  const bankOfMontreal = "Bank of Montreal";

  it("Translates \"001\" to \"Bank of Montreal\"", () => {
    const bankName = getCanadianBankName("001");
    assert.strictEqual(bankName, bankOfMontreal);
  });

  it("Translates \"1\" to \"Bank of Montreal\"", () => {
    const bankName = getCanadianBankName("1");
    assert.strictEqual(bankName, bankOfMontreal);
  });

  it("Translates 1 to \"Bank of Montreal\"", () => {
    const bankName = getCanadianBankName(1);
    assert.strictEqual(bankName, bankOfMontreal);
  });
});

describe("Canadian Imperial Bank of Commerce (010)", () => {

  const cibc = "Canadian Imperial Bank of Commerce";

  it("Translates \"010\" to \"Canadian Imperial Bank of Commerce\"", () => {
    const bankName = getCanadianBankName("010");
    assert.strictEqual(bankName, cibc);
  });

  it("Translates 10 to \"Canadian Imperial Bank of Commerce\"", () => {
    const bankName = getCanadianBankName(10);
    assert.strictEqual(bankName, cibc);
  });

  it("Translates \"30800-010\" to \"Simplii Financial\"", () => {
    const bankName = getCanadianBankName("010", "30800");
    assert.strictEqual(bankName, "Simplii Financial");
  });
});

describe("Errors", () => {

  it("Returns undefined for a too long institution number", () => {
    const bankName = getCanadianBankName("1234");
    assert.strictEqual(typeof(bankName), "undefined");
  });

  it("Returns undefined for an institution number with letters", () => {
    const bankName = getCanadianBankName("abc");
    assert.strictEqual(typeof(bankName), "undefined");
  });

  it("Returns undefined for a negative institution number", () => {
    const bankName = getCanadianBankName(-12);
    assert.strictEqual(typeof(bankName), "undefined");
  });

  it("Returns undefined for a null institution number", () => {
    // eslint-disable-next-line unicorn/no-null
    const bankName = getCanadianBankName(null);
    assert.strictEqual(typeof(bankName), "undefined");
  });

  it("Returns undefined for an undefined institution number", () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    const bankName = getCanadianBankName(undefined);
    assert.strictEqual(typeof(bankName), "undefined");
  });

  it("Returns undefined for a blank institution number", () => {
    const bankName = getCanadianBankName("");
    assert.strictEqual(typeof(bankName), "undefined");
  });
});
