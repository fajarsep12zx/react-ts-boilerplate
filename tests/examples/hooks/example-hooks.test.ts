import { renderHook, act } from '@testing-library/react-hooks'
import useExampleHooks from './example-hooks'

describe('hooks unit test example', () => {
  test('should increment counter', () => {
    const { result } = renderHook(() => useExampleHooks())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
