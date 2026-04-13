describe('API Tests', () => {
  it('Deve verificar se o site está no ar', () => {
    cy.request('https://www.saucedemo.com')
      .its('status')
      .should('eq', 200)
  })
})