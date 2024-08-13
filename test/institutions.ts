import assert from 'node:assert'
import { describe, it } from 'node:test'

import getCanadianBankName from '../index.js'
import { institutionCommonNames, institutions } from '../institutions.js'

await describe('institutions', async () => {
  await it('Only includes valid transit-institution codes', () => {
    for (const institutionKey of Object.keys(institutions)) {
      // eslint-disable-next-line security/detect-unsafe-regex
      assert(/^\d{5}-\d{3}$/.test(institutionKey))
    }
  })
})

await describe('institutionCommonNames', async() => {
  await it('Contains valid institution codes', () => {
    for (const commonName of Object.keys(institutionCommonNames)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, security/detect-object-injection
      assert(getCanadianBankName(institutionCommonNames[commonName]) !== undefined)
    }
  })
})