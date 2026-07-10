class RegistrationPage {
  elements = {
    nameInput: () => cy.get('[data-testid="nome"]'),
    emailInput: () => cy.get('[data-testid="email"]'),
    passwordInput: () => cy.get('[data-testid="password"]'),
    administratorCheckbox: () => cy.get('[data-testid="checkbox"]'),
    registerButton: () => cy.get('[data-testid="cadastrar"]'),
    successMessage: () => cy.contains('Cadastro realizado com sucesso'),
  }

  visit() {
    cy.visit('/cadastrarusuarios')
  }

  fillName(name) {
    this.elements
      .nameInput()
      .should('be.visible')
      .clear()
      .type(name)
  }

  fillEmail(email) {
    this.elements
      .emailInput()
      .should('be.visible')
      .clear()
      .type(email)
  }

  fillPassword(password) {
    this.elements
      .passwordInput()
      .should('be.visible')
      .clear()
      .type(password, { log: false })
  }

  selectAdministrator() {
    this.elements
      .administratorCheckbox()
      .should('be.visible')
      .check()
  }

  submit() {
    this.elements
      .registerButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
  }

  registerAdministrator(user) {
    this.fillName(user.name)
    this.fillEmail(user.email)
    this.fillPassword(user.password)
    this.selectAdministrator()
    this.submit()
  }

  validateSuccessfulRegistration() {
    this.elements
      .successMessage()
      .should('be.visible')
  }

  validateAdministratorRedirect() {
    cy.location('pathname', { timeout: 10000 })
      .should('eq', '/admin/home')
  }
}

module.exports = new RegistrationPage()