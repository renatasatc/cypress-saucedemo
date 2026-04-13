describe('Carrinho', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Deve adicionar produto ao carrinho', () => {
    cy.get('.inventory_item').first().within(() => {
      cy.contains('Add to cart').click()
    })

    cy.get('.shopping_cart_badge').should('contain', '1')
  })
})