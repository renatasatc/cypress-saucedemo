describe('Login SauceDemo', () => {
  it('Login com sucesso', () => {
    cy.login()

    // Forçando erro 👇
    cy.get('h1').should('contain', 'ERRO TESTE')
  })
})