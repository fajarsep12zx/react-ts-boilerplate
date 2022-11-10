import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '@zebraxid/frontend-kit/src/styles/theme'
import { getChartScrollableOption } from '@zebraxid/frontend-kit/src/utils/chart'
import { thousandSeparator } from '@zebraxid/frontend-kit/src/utils/number'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { get } from 'lodash-es'

// import globalTheme from '~/styles/chartsTheme'

import useStyle from './style'

const getChartOptions = (decimalPlaces) => {
  const chartOptions: any = {
    chart: {
      scrollablePlotArea: { },
    },
    colors: [],
    credits: {
      enabled: false,
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      margin: 28,
    },
    plotOptions: {
      series: {
        animation: false,
        borderRadius: 2,
        pointPadding: 0.15,
      },
    },
    series: [],
    title: {
      align: 'left',
      text: '',
      x: -10,
    },
    tooltip: {
      formatter() {
        let tooltip = `<b>Period: ${this.x}</b>`
        this.points.forEach((point) => {
          tooltip += `<br/><span style="color:${point.color}">\u25CF</span> `
          tooltip += `${point.series.name}: ${thousandSeparator(point.y, decimalPlaces)}`
        })
        return tooltip
      },
      shared: true,
    },
    xAxis: {
      categories: [],
      labels: {
        autoRotation: false,
        reserveSpace: true,
        overflow: 'justify',
      },
    },
    yAxis: {
      type: 'logarithmic',
      min: null,
      allowDecimals: false,
      labels: {
        enabled: true,
        overflow: 'justify',
        formatter() {
          return thousandSeparator(this.value, 0)
        },
      },
      title: {
        enabled: false,
      },
    },
  }

  return chartOptions
}

const SingleColumn = ({
  chartCategories, chartColors, chartSeries,
  chartTitle, decimalPlaces, noLegend,
  options, responsive,
}) => {
  // apply highcharts Global Theme
  // Highcharts.setOptions({
  //   theme: globalTheme,
  // })

  const classes = useStyle({ responsive })
  const scrollableOption = getChartScrollableOption(chartCategories)
  const currentChartOptions = getChartOptions(decimalPlaces)

  const chartData = {
    options: {
      ...currentChartOptions,
      chart: {
        ...currentChartOptions.chart,
        scrollablePlotArea: scrollableOption.enable ? { minWidth: scrollableOption.minWidth } : {},
      },
      plotOptions: {
        ...currentChartOptions.plotOptions,
        ...get(options, 'plotOptions'),
      },
      legend: {
        ...currentChartOptions.legend,
        enabled: !noLegend,
      },
      title: {
        ...currentChartOptions.title,
        text: chartTitle,
      },
      colors: chartColors,
      xAxis: {
        ...currentChartOptions.xAxis,
        categories: chartCategories,
      },
      yAxis: {
        ...currentChartOptions.yAxis,
        ...get(options, 'yAxis'),
      },
      series: chartSeries,
      tooltip: {
        ...currentChartOptions.tooltip,
        ...get(options, 'tooltip'),
      },
    },
  }

  return (
    <div className={classes.wrapper}>
      <HighchartsReact
        containerProps={{ className: classes.chart }}
        highcharts={Highcharts}
        options={chartData.options}
        immutable
      />
    </div>
  )
}

SingleColumn.defaultProps = {
  chartColors: [
    colors.LemonChrome,
    colors.Malachite,
    colors.TropicalRainForest,
    colors.ScienceBlue,
    colors.FireEngineRed,
  ],
  chartTitle: '',
  decimalPlaces: 1,
  noLegend: false,
  options: null,
  responsive: false,
}

SingleColumn.propTypes = {
  chartCategories: PropTypes
    .arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    )
    .isRequired,
  chartColors: PropTypes.arrayOf(PropTypes.string),
  chartSeries: PropTypes
    .arrayOf(PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    }))
    .isRequired,
  chartTitle: PropTypes.string,
  decimalPlaces: PropTypes.number,
  noLegend: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
  responsive: PropTypes.bool,
}

export default SingleColumn
