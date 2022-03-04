# Get Canadian Bank Name

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/get-canadian-bank-name)](https://www.npmjs.com/package/@cityssm/get-canadian-bank-name)
[![Codacy grade](https://img.shields.io/codacy/grade/c52a29dbdfa54c8b8c0733a0060d079e)](https://app.codacy.com/gh/cityssm/get-canadian-bank-name/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/get-canadian-bank-name)](https://codeclimate.com/github/cityssm/get-canadian-bank-name)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/get-canadian-bank-name)](https://codeclimate.com/github/cityssm/get-canadian-bank-name)
[![AppVeyor](https://img.shields.io/appveyor/build/dangowans/get-canadian-bank-name)](https://ci.appveyor.com/project/dangowans/get-canadian-bank-name)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/get-canadian-bank-name)](https://app.snyk.io/org/cityssm/project/b55b9cac-29f7-4a4b-9adc-6b21e61a315b)

A simple library to translate Canadian bank institution and transit numbers into the corresponding bank names.

## Installation

```sh
npm install @cityssm/get-canadian-bank-name
```

## Usage

```javascript
import { getCanadianBankName } from "@cityssm/get-canadian-bank-name";

console.log( getCanadianBankName('001') );
// -> "Bank of Montreal"

console.log( getCanadianBankName('828', '14492') );
// => "Northern Credit Union"
```

## Need More Information?

This project was made to help validate preauthorized payment data
tracked by the [City of Sault Ste. Marie](https://saultstemarie.ca/).
Included institution numbers were prioritized based on the City's needs.

Need some additional institution numbers for your uses?
Need to correct a bank name that is spelt incorrectly, or has changed?
[Create an issue](https://github.com/cityssm/get-canadian-bank-name/issues/new)
with your request, or submit a pull request adding them.

Need more details, like the address of the branch the corresponds to
institution and transit numbers?
[**Payments Canada** maintains a list](https://www.payments.ca/our-directories/financial-institutions-branch-directory)
of all member banks and credit unions, along with their addresses,
that is updated weekly.

## Related Project

**[wealthsimple/canadian-bank-account](https://github.com/wealthsimple/canadian-bank-account)** (Archived)<br />
Validate transit and account numbers of common Canadian banks.
