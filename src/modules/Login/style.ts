import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '~/styles/theme'

interface IProps {
  error: boolean
}

const style = makeStyles<Theme, IProps>((theme) => ({
  container: {
    backgroundColor: colors.White,
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
  },
  logo: {
    width: '15.625vw',
  },
  background: {
    background: 'url(\'/public/images/login-bg.png\')',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    flexBasis: '100%',
    maxWidth: '100%',
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.typography.fontWeightBold,
    color: colors.Charcoal,
    marginBottom: theme.spacing(3),
  },
  subTitle: {
    fontSize: theme.fontSize.l,
    marginBottom: theme.spacing(9),
    color: colors.Charcoal,
    fontWeight: theme.typography.fontWeightBold,

  },
  welcomeTitle: {
    fontSize: theme.fontSize.xxl,
  },
  errorMessage: {
    display: ({ error }) => (error ? 'flex' : 'none'),
    fontSize: theme.fontSize.ll,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: colors.AlizarinCrimson,
  },
  errorTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  formContainer: {
    flexBasis: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '40%',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(6),
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(6),
    },
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2.2px',
    backgroundColor: colors.DarkNavy,
    borderColor: 'transparent',
    padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
    fontSize: theme.fontSize.ll,
    fontWeight: theme.typography.fontWeightBold,
    color: colors.White,
  },
  inputBox: {
    backgroundColor: colors.Rhino,
  },
}))

export default style
