// import path from 'path' // The ide would love to do this, but imports don't work outside of webpack, so you must call require
const path = require('path')

module.exports = {
  collectCoverageFrom: ['**/src/**/*.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\.module\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  coverageThreshold: {
    global: {
      statements: 25,
      branches: 13,
      lines: 26,
      functions: 27,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100,
    },
  },
}
