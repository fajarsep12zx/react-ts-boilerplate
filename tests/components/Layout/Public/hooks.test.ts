import { act, renderHook } from '@testing-library/react-hooks'

import useCustom from '~/components/Layout/Public/hooks'

import expectedResult from './dummy/expectedResult.json'
import mockedData from './dummy/mockedData.json'

describe('hooks layout public handleInputPassword', () => {
  test('should set state to expected result', () => {
    const { result } = renderHook(() => useCustom())

    act(() => {
      result.current.handleInputPassword(mockedData.password)
    })

    expect(result.current.password).toBe(expectedResult.password)
  })
})

describe('hooks layout public handleInputUsername', () => {
  test('should set state to expected result', () => {
    const { result } = renderHook(() => useCustom())

    act(() => {
      result.current.handleInputUsername(mockedData.username)
    })

    expect(result.current.username).toBe(expectedResult.username)
  })
})

describe('hooks layout public handleShowPassword', () => {
  test('should set state to expected result', () => {
    const { result } = renderHook(() => useCustom())

    act(() => {
      result.current.handleShowPassword()
    })

    expect(result.current.showPassword).toBe(true)
  })
})
