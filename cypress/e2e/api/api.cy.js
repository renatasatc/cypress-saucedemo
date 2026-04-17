describe('API Tests', () => {

  it('Deve verificar se o site está no ar', () => {
    cy.request('https://www.saucedemo.com')
      .its('status')
      .should('eq', 200)
  })

  it('Deve validar tempo de resposta', () => {
    cy.request('https://www.saucedemo.com')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(2000) //  performance
      })
  })

  it('Deve validar conteúdo da página', () => {
    cy.request('https://www.saucedemo.com')
      .its('body')
      .should('include', 'Swag Labs') // valida conteúdo real
  })

})