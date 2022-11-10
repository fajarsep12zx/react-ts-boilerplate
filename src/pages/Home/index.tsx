import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'

import Home from '~/modules/Home'

const HomePage = () => (
  <>
    <Switch>
      <Route
        key="home"
        path="/home"
        component={Home}
        exact={false}
      />
    </Switch>
  </>
)

export default HomePage
