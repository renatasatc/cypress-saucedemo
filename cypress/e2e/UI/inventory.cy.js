describe('Inventory', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Deve mostrar produtos', () => {
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })
})