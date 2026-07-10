const { createUser } = require('../../factories/userFactory')

describe('Users API', () => {
  it('should create and retrieve a new administrator user', () => {
    const user = createUser()

    cy.env(['apiUrl']).then(({ apiUrl }) => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/usuarios`,
        body: {
          nome: user.name,
          email: user.email,
          password: user.password,
          administrador: 'true',
        },
      }).then((createResponse) => {
        expect(createResponse.status).to.eq(201)
        expect(createResponse.body.message)
          .to.eq('Cadastro realizado com sucesso')

        expect(createResponse.body._id).to.be.a('string')
        expect(createResponse.body._id).to.not.be.empty

        const userId = createResponse.body._id

        cy.request({
          method: 'GET',
          url: `${apiUrl}/usuarios/${userId}`,
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(200)

          expect(getResponse.body).to.deep.include({
            nome: user.name,
            email: user.email,
            administrador: 'true',
            _id: userId,
          })

          expect(getResponse.body).to.have.property('password')
        })
      })
    })
  })
})