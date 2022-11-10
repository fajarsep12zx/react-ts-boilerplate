import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '~/styles/theme'

interface IProps {
  bg: string
}

const style = makeStyles<Theme, IProps>((theme) => ({
  background: {
    backgroundImage: ({ bg }) => `url(${bg})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    width: '100vw',
    height: '100vh',
  },
  paper: {
    position: 'absolute',
    right: '12vw',
    top: 'calc(50% - 22vh)',
    width: '20vw',
    boxShadow: theme.element.boxShadow,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  label: {
    color: colors.RiverBed,
  },
  input: {
    backgroundColor: colors.WildSand,
    borderColor: colors.DustyGrey,
    '& input': {
      padding: theme.spacing(4),
    },
  },
  submit: {
    textTransform: 'none',
    color: colors.DustyGrey,
    padding: theme.spacing(4),
    fontSize: theme.fontSize.m,
  },
  link: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}))

export default style
