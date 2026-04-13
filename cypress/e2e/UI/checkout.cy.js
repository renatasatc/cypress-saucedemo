describe('Checkout', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Deve finalizar compra com sucesso', () => {
    // adiciona produto
    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click()
    })

    // vai para carrinho
    cy.get('.shopping_cart_link').click()

    // checkout
    cy.get('[data-test="checkout"]').click()

    // preenche dados
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    // finaliza compra
    cy.get('[data-test="finish"]').click()

    // valida sucesso
    cy.contains('Thank you for your order!').should('be.visible')
  })
})