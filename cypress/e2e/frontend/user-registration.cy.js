const registrationPage = require('../../pages/RegistrationPage')
const { createUser } = require('../../factories/userFactory')

describe('Administrator user registration', () => {
  it('should register a new administrator user successfully', () => {
    const user = createUser()

    cy.intercept('POST', '**/usuarios').as('createUser')

    registrationPage.visit()
    registrationPage.registerAdministrator(user)

    cy.wait('@createUser').then(({ request, response }) => {
      expect(request.body).to.deep.include({
        nome: user.name,
        email: user.email,
        administrador: 'true',
      })

      expect(response.statusCode).to.eq(201)
      expect(response.body).to.have.property(
        'message',
        'Cadastro realizado com sucesso',
      )
      expect(response.body).to.have.property('_id')
    })

    registrationPage.validateSuccessfulRegistration()
    registrationPage.validateAdministratorRedirect()
  })
})