import React from 'react'
import { withRouter } from 'react-router-dom'
import { flow } from 'lodash-es'
import { withStyles } from '@material-ui/core/styles'

import { logError } from '~/utils/error-logger'
import style from './style'

// TODO: Refactor to functional component
// Change to functional component if componentDidCatch available as react hooks
interface IProps {
  location: any
  classes: any
}

interface IState {
  lastLocation: null,
  hasError: boolean,
}

class InternalServerError extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)

    this.state = {
      lastLocation: null,
      hasError: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.lastLocation) {
      return {
        hasError: false,
      }
    }

    if (state.hasError) {
      return {
        hasError: true,
      }
    }

    return state
  }

  componentDidCatch(err, errInfo) {
    const { location } = this.props

    this.setState({
      lastLocation: location.pathname,
      hasError: err,
    })

    logError({ info: errInfo, exception: err })
  }

  render() {
    const { hasError } = this.state
    const { children, classes } = this.props

    if (hasError) {
      return (
        <div className={classes.wrapper}>
          <img alt="internal-server-error" src="/public/images/500-server-error.svg" />
        </div>
      )
    }

    return children
  }
}

export default flow(
  withRouter,
  withStyles(style),
)(InternalServerError)
