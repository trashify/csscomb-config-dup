/* eslint-env jest */
'use strict'

const config = require('./')

test('should export config', () => {
  expect(config).toBeDefined()
  expect(typeof config).toBe('object')
})
