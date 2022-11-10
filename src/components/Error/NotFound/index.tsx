import React from 'react'

import useStyle from './style'

const NotFound = () => {
  const classes = useStyle()

  return (
    <div className={classes.wrapper}>
      <img alt="not-found" src="/public/images/404-page-not-found.svg" />
    </div>
  )
}

export default NotFound
