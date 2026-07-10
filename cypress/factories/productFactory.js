function createProduct(overrides = {}) {
  const uniqueId = Date.now()

  return {
    name: `Automation Product ${uniqueId}`,
    price: 199,
    description: 'Product created by Cypress automation',
    quantity: 10,
    ...overrides,
  }
}

module.exports = {
  createProduct,
}