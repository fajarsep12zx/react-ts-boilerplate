const SentryCliPlugin = require('@sentry/webpack-plugin')

module.exports.generateSentryConfig = () => {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
    return new SentryCliPlugin({
      include: './dist',
      configFile: '.env',
    })
  }

  return null
}
