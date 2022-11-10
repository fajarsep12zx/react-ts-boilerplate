import { makeStyles, Theme } from '@material-ui/core/styles'

interface IProps {
  responsive: boolean
}

const style = makeStyles<Theme, IProps>(() => ({
  wrapper: {
    '@media (min-width: 1367px)': {
      position: 'relative',
      height: '100%',
    },
  },
  chart: {
    '@media (min-width: 1367px)': {
      position: ({ responsive }) => (responsive ? 'absolute' : 'relative'),
      height: '100%',
      width: '100%',
    },
  },
}))

export default style
