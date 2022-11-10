import React, { lazy, Suspense } from 'react'

import Loading from '@zebraxid/frontend-kit/src/components/Loading'

const loadable = (importFunc, withLoading = false) => {
  const LazyComponent = lazy(importFunc)

  return (props) => (
    <Suspense fallback={withLoading ? <Loading /> : null}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
