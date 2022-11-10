import React, { Suspense } from 'react'
import {
  Switch, Route, withRouter,
} from 'react-router-dom'

import Loading from '@zebraxid/frontend-kit/src/components/Loading'

import LoginPage from '~/pages/Login'
import useAuth from '~/utils/auth'

const PublicLayout = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn
    ? null
    : (
      <>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Suspense>
      </>
    )
}

export default withRouter(PublicLayout)
