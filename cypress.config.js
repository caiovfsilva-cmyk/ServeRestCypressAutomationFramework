const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://front.serverest.dev',

    env: {
      apiUrl: 'https://serverest.dev',
    },

    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',

    viewportWidth: 1280,
    viewportHeight: 720,

    screenshotOnRunFailure: true,
    video: false,

    defaultCommandTimeout: 10000,

    retries: {
      runMode: 1,
      openMode: 0,
    },

       setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      })

      return config
    },
  },
})