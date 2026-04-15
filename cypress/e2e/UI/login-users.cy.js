describe('Login com diferentes usuários', () => {

  it('Usuário padrão deve logar', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', 'inventory')
  })

  it('Usuário bloqueado não deve logar', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })

  it('Usuário com lentidão deve logar', () => {
    cy.login('performance_glitch_user', 'secret_sauce')
    cy.url({ timeout: 10000 }).should('include', 'inventory')
  })

})