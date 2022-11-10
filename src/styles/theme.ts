import { CSSProperties } from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { colors as importedColors } from '@zebraxid/frontend-kit/src/styles/theme'

import { isFinite } from 'lodash-es'

export const fontSize = {
  xxs: '0.625rem', // 10
  xs: '0.813rem', // 12
  s: '0.875rem', // 14
  m: '1rem', // 16
  l: '1.125rem', // 18
  ll: '1.25rem', // 20
  xl: '1.5rem', // 24
  xxl: '1.75rem', // 28
  x3l: '2.125rem', // 34
  x4l: '2.25rem', // 36
  x5l: '4.5rem', // 72
}
interface IFontSizeProp {
  xxs: CSSProperties['fontSize'],
  xs: CSSProperties['fontSize'],
  s: CSSProperties['fontSize'],
  m: CSSProperties['fontSize'],
  l: CSSProperties['fontSize'],
  ll: CSSProperties['fontSize'],
  xl: CSSProperties['fontSize'],
  xxl: CSSProperties['fontSize'],
  x3l: CSSProperties['fontSize'],
  x4l: CSSProperties['fontSize'],
  x5l: CSSProperties['fontSize'],
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontSize? : IFontSizeProp
    element?: {
      boxShadow: CSSProperties['boxShadow']
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontSize? : IFontSizeProp
    element?: {
      boxShadow?: CSSProperties['boxShadow']
    }
  }
}

export const colors = {
  ...importedColors,
}

/** NOTE
 *  you can't (and you shouldn't) to extend the color palette on a global theme
 * just  call the colors constan instead.
 * https://stackoverflow.com/questions/61097813/how-can-i-extend-color-palette-in-material-ui-with-typescript
 */

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      },
    },
  },
  palette: {
    common: {
      black: colors.Black,
      white: colors.White,
    },
    primary: {
      main: colors.DarkNavy,
      contrastText: colors.White,
    },
    secondary: {
      main: colors.AzureRadiance,
      contrastText: colors.White,
    },
    error: {
      main: colors.SpanishBlue,
      contrastText: colors.White,
    },
    text: {
      primary: colors.Black,
      secondary: colors.RiverBed,
      disabled: colors.DustyGrey,
      hint: colors.DustyGrey,
    },
    background: {
      default: colors.Gallery,
    },
    action: {
      disabled: colors.DustyGrey,
    },
    info: {
      main: colors.PaleBlue,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    fontFamily: 'Open Sans, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  fontSize,
  element: {
    boxShadow: '0 1px 2px 0 rgba(128, 128, 128, 0.5)',
  },
  // Set baseline width to 1920
  spacing: (factor) => [
    '0.104vw', // 2
    '0.208vw', // 4
    '0.417vw', // 8
    '0.625vw', // 12
    '0.833vw', // 16
    '1.042vw', // 20
    '1.25vw', // 24
    '1.458vw', // 28
    '1.667vw', // 32
    '2.5vw', // 48
    '3.333vw', // 64
    '4.167vw', // 80
    '5vw', // 96
    '6.25vw', // 120p
  ][factor],
})

export const getRatingColorByTarget = (value, target) => {
  const halfTarget = target / 2
  if (target === 0) return colors.LapisLazuli

  if (value >= target) return colors.SeaWeed
  if (value >= halfTarget) return colors.GoldOre
  if (value > 0) return colors.RedAlert
  return colors.RedAlert
}

export const getRatingColorByFixedRatio = (value, target) => {
  if (target === 0 || !isFinite(value)) return colors.LapisLazuli

  if (value >= 100) return colors.SeaWeed
  if (value >= 50) return colors.GoldOre
  if (value > 0) return colors.RedAlert
  return colors.RedAlert
}

export default responsiveFontSizes(theme)
