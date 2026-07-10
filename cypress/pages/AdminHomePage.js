class AdminHomePage {
  elements = {
    logoutButton: () => cy.get('[data-testid="logout"]'),
  }

  validatePageLoaded() {
    cy.location('pathname', { timeout: 10000 })
      .should('eq', '/admin/home')

    this.elements
      .logoutButton()
      .should('be.visible')
      .and('be.enabled')
  }
}

module.exports = new AdminHomePage()