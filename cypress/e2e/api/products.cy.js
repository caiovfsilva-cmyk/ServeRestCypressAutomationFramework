const { createUser } = require('../../factories/userFactory')
const { createProduct } = require('../../factories/productFactory')

describe('Products API', () => {
  it('should create a new product with valid authentication', () => {
    const administrator = createUser()
    const product = createProduct()

    cy.createUserByApi(administrator).then((createdUser) => {
      cy.loginByApi(
        createdUser.email,
        createdUser.password,
      ).then((authorizationToken) => {
        cy.env(['apiUrl']).then(({ apiUrl }) => {
          expect(apiUrl).to.be.a('string')
          expect(apiUrl).to.not.be.empty

          cy.request({
            method: 'POST',
            url: `${apiUrl}/produtos`,
            headers: {
              authorization: authorizationToken,
            },
            body: {
              nome: product.name,
              preco: product.price,
              descricao: product.description,
              quantidade: product.quantity,
            },
          }).then((createResponse) => {
            expect(createResponse.status).to.eq(201)

            expect(createResponse.body).to.have.property('message')
            expect(createResponse.body.message).to.eq(
              'Cadastro realizado com sucesso',
            )

            expect(createResponse.body).to.have.property('_id')
            expect(createResponse.body._id).to.be.a('string')
            expect(createResponse.body._id).to.not.be.empty

            const productId = createResponse.body._id

            cy.request({
              method: 'GET',
              url: `${apiUrl}/produtos/${productId}`,
            }).then((getResponse) => {
              expect(getResponse.status).to.eq(200)

              expect(getResponse.body).to.deep.include({
                nome: product.name,
                preco: product.price,
                descricao: product.description,
                quantidade: product.quantity,
                _id: productId,
              })
            })

            cy.request({
              method: 'DELETE',
              url: `${apiUrl}/produtos/${productId}`,
              headers: {
                authorization: authorizationToken,
              },
            }).then((deleteResponse) => {
              expect(deleteResponse.status).to.eq(200)

              expect(deleteResponse.body).to.have.property('message')
              expect(deleteResponse.body.message).to.eq(
                'Registro excluído com sucesso',
              )
            })
          })
        })
      })
    })
  })
})