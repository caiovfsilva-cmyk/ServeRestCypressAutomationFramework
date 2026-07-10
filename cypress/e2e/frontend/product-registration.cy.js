const loginPage = require('../../pages/LoginPage')
const adminHomePage = require('../../pages/AdminHomePage')
const productRegistrationPage = require(
  '../../pages/ProductRegistrationPage',
)

const { createUser } = require('../../factories/userFactory')
const { createProduct } = require('../../factories/productFactory')

describe('Product registration', () => {
  it('should register a new product successfully', () => {
    const administrator = createUser()
    const product = createProduct()

    cy.createUserByApi(administrator).then((createdUser) => {
      cy.intercept('POST', '**/login').as('loginRequest')
      cy.intercept('POST', '**/produtos').as('createProductRequest')

      loginPage.visit()
      loginPage.login(
        createdUser.email,
        createdUser.password,
      )

      cy.wait('@loginRequest').then(({ response }) => {
        expect(response).to.not.be.undefined
        expect(response.statusCode).to.eq(200)

        expect(response.body).to.have.property('authorization')
        expect(response.body.authorization).to.be.a('string')
        expect(response.body.authorization).to.not.be.empty
      })

      adminHomePage.validatePageLoaded()

      productRegistrationPage.visit()
      productRegistrationPage.register(product)

      cy.wait('@createProductRequest').then(({ request, response }) => {
        expect(request.body).to.have.property('nome', product.name)
        expect(request.body).to.have.property(
          'descricao',
          product.description,
        )

        expect(Number(request.body.preco)).to.eq(product.price)
        expect(Number(request.body.quantidade)).to.eq(product.quantity)

        expect(request.headers).to.have.property('authorization')
        expect(request.headers.authorization).to.be.a('string')
        expect(request.headers.authorization).to.not.be.empty

        expect(response).to.not.be.undefined
        expect(response.statusCode).to.eq(201)

        expect(response.body).to.have.property(
          'message',
          'Cadastro realizado com sucesso',
        )

        expect(response.body).to.have.property('_id')
        expect(response.body._id).to.be.a('string')
        expect(response.body._id).to.not.be.empty
      })

      productRegistrationPage.validateProductListRedirect()
      productRegistrationPage.validateProductDisplayed(product.name)
    })
  })
})