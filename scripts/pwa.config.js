const path = require('path')

module.exports = {
  name: process.env.APP_NAME,
  short_name: 'ZX',
  description: process.env.APP_NAME,
  background_color: '#ffffff',
  theme_color: '#282560',
  inject: true,
  ios: true,
  icons: [
    {
      src: path.resolve('public/logo/android-icon-192x192.png'),
      sizes: [72, 96, 128, 144, 192, 384, 512],
    },
    {
      src: path.resolve('public/logo/apple-icon.png'),
      sizes: [120, 152, 167, 180],
      ios: true,
    },
  ],
}
