class LoginPage {
  elements = {
    emailInput: () => cy.get('[data-testid="email"]'),
    passwordInput: () => cy.get('[data-testid="senha"]'),
    loginButton: () => cy.get('[data-testid="entrar"]'),
  }

  visit() {
    cy.visit('/login')
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

  submit() {
    this.elements
      .loginButton()
      .should('be.visible')
      .and('be.enabled')
      .click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }

  validateAdministratorRedirect() {
    cy.location('pathname', { timeout: 10000 })
      .should('eq', '/admin/home')
  }
}

module.exports = new LoginPage()