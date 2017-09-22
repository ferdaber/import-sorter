import { defineTest } from 'jscodeshift/dist/testUtils'
jest.autoMockOff()
defineTest(__dirname, 'foo-to-bar')
