const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://front.serverest.dev',

    specPattern: 'e2e/**/*.cy.js',
    supportFile: 'support/e2e.js',

    viewportWidth: 1440,
    viewportHeight: 900,

    video: true,
    screenshotOnRunFailure: true,

    defaultCommandTimeout: 10000,

    retries: {
      runMode: 1,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      return config
    },
  },
})