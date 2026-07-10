const loginPage = require('../../pages/LoginPage')
const adminHomePage = require('../../pages/AdminHomePage')
const { createUser } = require('../../factories/userFactory')

describe('Administrator login', () => {
  it('should log in successfully with valid administrator credentials', () => {
    const administrator = createUser()

    cy.createUserByApi(administrator).then((createdUser) => {
      cy.intercept('POST', '**/login').as('loginRequest')

      loginPage.visit()

      loginPage.login(
        createdUser.email,
        createdUser.password,
      )

      cy.wait('@loginRequest').then(({ request, response }) => {
        expect(request.body).to.deep.include({
          email: createdUser.email,
          password: createdUser.password,
        })

        expect(response).to.not.be.undefined
        expect(response.statusCode).to.eq(200)

        expect(response.body).to.have.property('message')
        expect(response.body.message).to.include(
          'Login realizado com sucesso',
        )

        expect(response.body).to.have.property('authorization')
        expect(response.body.authorization).to.be.a('string')
        expect(response.body.authorization).to.not.be.empty
      })

      loginPage.validateAdministratorRedirect()
      adminHomePage.validatePageLoaded()
    })
  })
})