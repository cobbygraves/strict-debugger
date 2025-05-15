/** @type {import("jest").Config} **/
module.exports = {
  collectCoverage: true,
  verbose: true,
  coverageReporters: ['text', 'clover', 'json', 'lcov'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  }
}
