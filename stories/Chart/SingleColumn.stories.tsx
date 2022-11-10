import React from 'react'

import { array, number, text } from '@storybook/addon-knobs'

import SingleColumn from '~/components/Chart/SingleColumn'
import { colors } from '~/styles/theme'

import dummyMonthly from '../dummy-data/singlecolumn/monthly.json'
import dummyYearly from '../dummy-data/singlecolumn/yearly.json'

export default {
  title: 'Chart Single Column',
}

export const Default = () => (
  <SingleColumn
    chartCategories={dummyMonthly.chartCategories}
    chartSeries={dummyMonthly.chartSeries}
    decimalPlaces={number('Decimal Places', 1)}
  />
)

export const Custom = () => (
  <SingleColumn
    chartCategories={dummyMonthly.chartCategories}
    chartColors={array('customColors', [colors.LemonChrome, colors.FlushOrange, colors.PrussianBlue, colors.FunGreen, colors.Java])}
    chartSeries={dummyMonthly.chartSeries}
    chartTitle={text('title', 'Single Column Title')}
    decimalPlaces={number('Decimal Places', 1)}
  />
)

export const ScrollableMonthly = () => (
  <div id="container" style={{ width: '600px' }}>
    <SingleColumn
      chartCategories={dummyMonthly.chartCategories}
      chartColors={array('customColors', [colors.LemonChrome, colors.FlushOrange, colors.PrussianBlue, colors.FunGreen, colors.Java])}
      chartSeries={dummyMonthly.chartSeries}
      chartTitle={text('title', 'Single Column Scrollable Monthly')}
      decimalPlaces={number('Decimal Places', 1)}
    />
  </div>
)

export const ScrollableYearly = () => (
  <div id="container" style={{ width: '600px' }}>
    <SingleColumn
      chartCategories={dummyYearly.chartCategories}
      chartColors={array('customColors', [colors.LemonChrome, colors.FlushOrange, colors.PrussianBlue, colors.FunGreen, colors.Java])}
      chartSeries={dummyYearly.chartSeries}
      chartTitle={text('title', 'Single Column Scrollable Yearly')}
      decimalPlaces={number('Decimal Places', 1)}
    />
  </div>
)
