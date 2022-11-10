const ignoredESModule = ['lodash-es', '@zebraxid/frontend-kit'].join('|')

module.exports = {
  automock: false,
  rootDir: '../',
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}',
  //   '!src/**/*.test.{js,jsx}',
  //   '!src/**/index.js',
  //   '!src/**/*.style.{js,jsx}',
  //   '!src/container/app/app.container.jsx',
  //   '!src/global-*.js',
  //   '!src/**/config.js',
  //   '!src/**/*.config.js',
  //   '!src/*/*/routes.{js,jsx}',
  // ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '~/public/(.*)$': '<rootDir>/public/$1',
    '~(.*)$': '<rootDir>/src/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/scripts/mocks/image.js',
  },
  coverageReporters: ['html', 'lcov', 'cobertura'],
  setupFilesAfterEnv: [
    '<rootDir>/scripts/testing/test-bundler.js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${ignoredESModule})`,
  ],
}
