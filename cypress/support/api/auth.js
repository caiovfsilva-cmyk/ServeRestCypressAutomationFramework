Cypress.Commands.add('loginByApi', (email, password) => {
  return cy.env(['apiUrl']).then(({ apiUrl }) => {
    if (!apiUrl) {
      throw new Error('apiUrl is not defined in cypress.config.js')
    }

    return cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email,
        password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200)

      expect(response.body)
        .to.have.property('message')
        .and.include('Login realizado com sucesso')

      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization).to.be.a('string')
      expect(response.body.authorization).to.not.be.empty

      return response.body.authorization
    })
  })
})