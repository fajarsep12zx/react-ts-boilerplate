import addOne from './example-function'

describe('function unit test example', () => {
  test('should add 1 on current value', () => {
    const initialValue = 1
    const result = addOne(initialValue)

    expect(result).toBe(2)
  })
})
