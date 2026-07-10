Cypress.Commands.add('createUserByApi', (user) => {
  return cy.env(['apiUrl']).then(({ apiUrl }) => {
    if (!apiUrl) {
      throw new Error('apiUrl is not defined in cypress.config.js')
    }

    return cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: {
        nome: user.name,
        email: user.email,
        password: user.password,
        administrador: user.administrator ? 'true' : 'false',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201)

      expect(response.body).to.include({
        message: 'Cadastro realizado com sucesso',
      })

      expect(response.body).to.have.property('_id')
      expect(response.body._id).to.be.a('string')
      expect(response.body._id).to.not.be.empty

      return {
        ...user,
        id: response.body._id,
      }
    })
  })
})