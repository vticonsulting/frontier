import {strip, getFormattedValue, checkPassword} from '../utils'

describe('getFormattedValue', () => {
  test('formats the value', () => {
    expect(getFormattedValue('1234.0')).toBe('1,234.0')
  })

  test('formats the value3', () => {
    expect(getFormattedValue('1.1')).toBe('1.1')
  })

  test('formats the value4', () => {
    expect(getFormattedValue('0')).toBe('0')
  })
})

describe('strip', () => {
  test('strips html tags from strings', () => {
    expect(strip('<p>Testing</p>')).toBe('Testing')
  })
})

describe('checkPassword', () => {
  test('is valid when length is greater than 6', () => {
    expect(checkPassword('1234567')).toBe('Your password is valid')
  })
})
