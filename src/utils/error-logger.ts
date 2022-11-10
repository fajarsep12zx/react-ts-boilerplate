import * as Sentry from '@sentry/browser'

export const init = () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.SENTRY_ENVIRONMENT || 'development',
  })
}

export const logError = ({
  info,
  exception,
}) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.withScope((scope) => {
      scope.setExtras(info)
      Sentry.captureException(exception)
    })
  }
}

export default {
  init,
  logError,
}
