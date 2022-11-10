import { colors } from '@zebraxid/frontend-kit/src/styles/theme'

const theme = {
  legend: {
    itemStyle: {
      color: colors.DustyGrey,
      font: '0.75rem Lato, Helvetica, sans-serif',
    },
  },
  title: {
    style: {
      color: colors.RiverBed,
      font: '0.75rem Lato, Helvetica, sans-serif',
    },
  },
  plotOptions: {
    series: {
      dataLabels: {
        align: 'center',
        style: {
          font: '0.75rem Lato, Helvetica, sans-serif',
        },
      },
    },
  },
  xAxis: {
    labels: {
      style: {
        color: colors.DustyGrey,
        font: '0.75rem Lato, Helvetica, sans-serif',
        fontWeight: '500',
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: colors.DustyGrey,
        font: '0.75rem Lato, Helvetica, sans-serif',
        fontWeight: '500',
      },
    },
  },
}

export default theme
