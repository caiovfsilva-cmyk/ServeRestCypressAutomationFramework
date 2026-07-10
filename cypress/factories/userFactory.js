function createUser(overrides = {}) {
  const uniqueId = `${Date.now()}-${Cypress._.random(1000, 9999)}`

  return {
    name: `Automation User ${uniqueId}`,
    email: `automation.${uniqueId}@example.com`,
    password: `Qa@${uniqueId}`,
    administrator: true,
    ...overrides,
  }
}

module.exports = {
  createUser,
}