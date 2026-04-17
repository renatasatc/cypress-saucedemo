describe('Menu lateral', () => {

  beforeEach(() => {
    cy.login()

    // 🔥 garante que a página carregou
    cy.url().should('include', '/inventory')

    // 🔥 abre o menu com segurança
    cy.get('#react-burger-menu-btn', { timeout: 10000 })
      .should('be.visible')
      .click()

    // 🔥 garante que o menu abriu
    cy.get('.bm-menu')
      .should('be.visible')
  })

  it('Deve exibir opções do menu', () => {
    cy.get('[data-test="inventory-sidebar-link"]').should('be.visible')
    cy.get('[data-test="about-sidebar-link"]').should('be.visible')
    cy.get('[data-test="logout-sidebar-link"]').should('be.visible')
    cy.get('[data-test="reset-sidebar-link"]').should('be.visible')
  })

  it('Deve redirecionar para All Items', () => {
    cy.get('[data-test="inventory-sidebar-link"]').click()
    cy.url().should('include', 'inventory')
  })

  it('Deve redirecionar para About', () => {
    cy.get('[data-test="about-sidebar-link"]').click()
    cy.url().should('include', 'saucelabs.com')
  })

  it('Deve fazer logout', () => {
    cy.get('[data-test="logout-sidebar-link"]', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.url().should('include', '/')
  })

  it('Deve resetar o carrinho', () => {
  // adiciona item
  cy.get('.inventory_item button').first().click()

  // 🔥 NÃO abre menu de novo (ele já está aberto!)
  cy.get('[data-test="reset-sidebar-link"]')
    .should('be.visible')
    .click()

  // valida que carrinho voltou a 0
  cy.get('.shopping_cart_badge').should('not.exist')
})
it('Deve ordenar produtos por nome A-Z', () => {
  cy.login()

  cy.get('.product_sort_container').select('az')

  cy.get('.inventory_item_name').then($items => {
    const nomes = [...$items].map(el => el.innerText)
    const ordenado = [...nomes].sort()

    expect(nomes).to.deep.equal(ordenado)
  })
})
it('Deve ordenar produtos por nome Z-A', () => {
  cy.login()

  cy.get('.product_sort_container').select('za')

  cy.get('.inventory_item_name').then($items => {
    const nomes = [...$items].map(el => el.innerText)
    const ordenado = [...nomes].sort().reverse()

    expect(nomes).to.deep.equal(ordenado)
  })
})
it('Deve ordenar produtos por menor preço', () => {
  cy.login()

  cy.get('.product_sort_container').select('lohi')

  cy.get('.inventory_item_price').then($items => {
    const precos = [...$items].map(el =>
      parseFloat(el.innerText.replace('$', ''))
    )

    const ordenado = [...precos].sort((a, b) => a - b)

    expect(precos).to.deep.equal(ordenado)
  })
})
it('Deve ordenar produtos por maior preço', () => {
  cy.login()

  cy.get('.product_sort_container').select('hilo')

  cy.get('.inventory_item_price').then($items => {
    const precos = [...$items].map(el =>
      parseFloat(el.innerText.replace('$', ''))
    )

    const ordenado = [...precos].sort((a, b) => b - a)

    expect(precos).to.deep.equal(ordenado)
  })
})
})