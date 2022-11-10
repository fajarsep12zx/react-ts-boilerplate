import React, { useMemo, Suspense } from 'react'
import {
  Redirect, Route, Switch,
} from 'react-router-dom'

import Loading from '@zebraxid/frontend-kit/src/components/Loading'

import Header from '~/components/Header'
import NotFound from '~/components/Error/NotFound'
import InternalServerError from '~/components/Error/InternalServerError'
import routes from '~/routes'

const ProtectedLayout = () => {
  const routesWithHeader = useMemo(
    () => routes.filter((route) => route.withHeader).map((route) => route.path),
    [],
  )
  return (
    <>
      <Switch>
        <Route path={routesWithHeader}>
          <Header />
        </Route>
      </Switch>
      <InternalServerError>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={!!route.exact}
              />
            ))}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </InternalServerError>
    </>
  )
}

export default ProtectedLayout
