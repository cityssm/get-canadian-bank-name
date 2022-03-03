import * as assert from "assert";
import { getCanadianBankName } from "../index.js";
describe("Bank of Montreal", () => {
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
describe("Canadian Imperial Bank of Commerce", () => {
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
