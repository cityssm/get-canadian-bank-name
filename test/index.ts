import assert from 'node:assert'
import { describe, it } from 'node:test'

import getCanadianBankName from '../index.js'

await describe('Bank of Montreal (001)', async () => {
  const bankOfMontreal = 'Bank of Montreal'

  await it('Translates "001" to "Bank of Montreal"', async () => {
    const bankName = getCanadianBankName('001')
    assert.strictEqual(bankName, bankOfMontreal)
  })

  await it('Translates "1" to "Bank of Montreal"', async () => {
    const bankName = getCanadianBankName('1')
    assert.strictEqual(bankName, bankOfMontreal)
  })

  await it('Translates 1 to "Bank of Montreal"', async () => {
    const bankName = getCanadianBankName(1)
    assert.strictEqual(bankName, bankOfMontreal)
  })
})

await describe('Canadian Imperial Bank of Commerce (010)', async () => {
  const cibc = 'Canadian Imperial Bank of Commerce'

  await it('Translates "010" to "Canadian Imperial Bank of Commerce"', async () => {
    const bankName = getCanadianBankName('010')
    assert.strictEqual(bankName, cibc)
  })

  await it('Translates 10 to "Canadian Imperial Bank of Commerce"', async () => {
    const bankName = getCanadianBankName(10)
    assert.strictEqual(bankName, cibc)
  })

  await it('Translates "30800-010" to "Simplii Financial"', async () => {
    const bankName = getCanadianBankName('010', '30800')
    assert.strictEqual(bankName, 'Simplii Financial')
  })
})

await describe('Errors', async () => {
  await it('Returns undefined for a too long institution number', async () => {
    const bankName = getCanadianBankName('1234')
    assert.strictEqual(typeof bankName, 'undefined')
  })

  await it('Returns undefined for an institution number with letters', async () => {
    const bankName = getCanadianBankName('abc')
    assert.strictEqual(typeof bankName, 'undefined')
  })

  await it('Returns undefined for a negative institution number', async () => {
    const bankName = getCanadianBankName(-12)
    assert.strictEqual(typeof bankName, 'undefined')
  })

  await it('Returns undefined for a null institution number', async () => {
    // eslint-disable-next-line unicorn/no-null
    const bankName = getCanadianBankName(null)
    assert.strictEqual(typeof bankName, 'undefined')
  })

  await it('Returns undefined for an undefined institution number', async () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    const bankName = getCanadianBankName(undefined)
    assert.strictEqual(typeof bankName, 'undefined')
  })

  await it('Returns undefined for a blank institution number', async () => {
    const bankName = getCanadianBankName('')
    assert.strictEqual(typeof bankName, 'undefined')
  })
})
