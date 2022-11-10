import { makeStyles } from '@material-ui/core/styles'
import { colors } from '~/styles/theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.White,
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: 2.2,
    borderWidth: 0.6,
    borderColor: colors.Rhino,
  },
}))

export default useStyles
