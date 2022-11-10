import React from 'react'
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core'

import ProtectedLayout from '~/components/Layout/Protected'
import PublicLayout from '~/components/Layout/Public'

import useCustom from './hooks'

const IndexPage = () => {
  const { data, methods } = useCustom()

  return (
    <>
      {data.isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}
      <Dialog
        open={data.openDialog}
        aria-labelledby="update-app-dialog-title"
        aria-describedby="update-app-dialog-description"
      >
        <DialogTitle>
          Update Application
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="update-app-dialog-description">
            There is a new version available. Do you want to reload page to update?
            <br />
            If you choose Update Later, the application will
            automatically update if you close the window.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={methods.handleCloseDialog}>
            Update Later
          </Button>
          <Button onClick={methods.handleUpdateApp} color="primary" variant="contained">
            Update Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default IndexPage
