const path = require('path')

module.exports = {
  // testEnvironment:'jest-environment-node'
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: ['**/src/**/*.js'],
  // coverageThreshold: {
  //   global: {
  //     statements: 15,
  //     branches: 10,
  //     functions: 15,
  //     lines: 15,
  //   },
  //   './src/shared/utils.js': {
  //     statements: 100,
  //     branches: 50,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
}
