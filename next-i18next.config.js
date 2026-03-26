module.exports = {
  fallbackLng: {
    default: ['en'],
  },
  debug: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  use: [
    require('i18next-fs-backend'),
    require('i18next-http-middleware'),
  ],
  ns: ['common', 'home', 'navigation', 'forms', 'products'],
  defaultNS: 'common',
  localePath: './src/app/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
