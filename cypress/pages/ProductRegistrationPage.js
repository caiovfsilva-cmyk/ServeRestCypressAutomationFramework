class ProductRegistrationPage {
  elements = {
    nameInput: () => cy.get('[data-testid="nome"]'),
    priceInput: () => cy.get('[data-testid="preco"]'),
    descriptionInput: () => cy.get('[data-testid="descricao"]'),
    quantityInput: () => cy.get('[data-testid="quantity"]'),
    registerButton: () => cy.get('[data-testid="cadastarProdutos"]'),
  }

  visit() {
    cy.visit('/admin/cadastrarprodutos')
  }

  fillName(name) {
    this.elements
      .nameInput()
      .should('be.visible')
      .clear()
      .type(name)
  }

  fillPrice(price) {
    this.elements
      .priceInput()
      .should('be.visible')
      .clear()
      .type(String(price))
  }

  fillDescription(description) {
    this.elements
      .descriptionInput()
      .should('be.visible')
      .clear()
      .type(description)
  }

  fillQuantity(quantity) {
    this.elements
      .quantityInput()
      .should('be.visible')
      .clear()
      .type(String(quantity))
  }

  submit() {
    this.elements
      .registerButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
  }

  register(product) {
    this.fillName(product.name)
    this.fillPrice(product.price)
    this.fillDescription(product.description)
    this.fillQuantity(product.quantity)
    this.submit()
  }

  validateProductListRedirect() {
    cy.location('pathname', { timeout: 10000 })
      .should('eq', '/admin/listarprodutos')
  }

  validateProductDisplayed(productName) {
    cy.contains(productName, { timeout: 10000 })
      .should('be.visible')
  }
}

module.exports = new ProductRegistrationPage()