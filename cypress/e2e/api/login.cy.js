const { createUser } = require('../../factories/userFactory')

describe('Authentication API', () => {
  it('should authenticate successfully with valid credentials', () => {
    const administrator = createUser()

    cy.createUserByApi(administrator).then((createdUser) => {
      cy.env(['apiUrl']).then(({ apiUrl }) => {
        expect(apiUrl).to.be.a('string')
        expect(apiUrl).to.not.be.empty

        cy.request({
          method: 'POST',
          url: `${apiUrl}/login`,
          body: {
            email: createdUser.email,
            password: createdUser.password,
          },
        }).then((response) => {
          expect(response.status).to.eq(200)

          expect(response.body).to.have.property('message')
          expect(response.body.message).to.eq(
            'Login realizado com sucesso',
          )

          expect(response.body).to.have.property('authorization')
          expect(response.body.authorization).to.be.a('string')
          expect(response.body.authorization).to.not.be.empty

          expect(response.body.authorization).to.match(/^Bearer\s.+/)
          expect(response.duration).to.be.lessThan(3000)
        })
      })
    })
  })
})