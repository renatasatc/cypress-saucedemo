describe('Login SauceDemo', () => {
  it('Login com sucesso', () => {
    cy.login()

    cy.url().should('include', '/inventory')
  })
})

