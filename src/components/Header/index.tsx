import React from 'react'
import {
  withRouter,
} from 'react-router-dom'

import {
  AppBar, Grid, Toolbar, Typography,
} from '@material-ui/core'

import MenuPopover from './AccountPopover'
import useStyles from './style'

const Header = () => {
  const classes = useStyles({ header: '' })
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar classes={{ root: classes.toolbarRootOverrides }} className={classes.toolbarWrapper}>
        <Grid justify="space-between" alignItems="center" container>
          <Grid xs item>
            <div className={classes.headerLogo}>
              <Typography
                variant="h6"
                role="button"
                className={classes.titleLink}
              >
                <span className={classes.headerTitle}>Insight Dashboard</span>
              </Typography>
            </div>
          </Grid>
          <Grid justify="flex-end" xs container item>
            <MenuPopover />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header)
