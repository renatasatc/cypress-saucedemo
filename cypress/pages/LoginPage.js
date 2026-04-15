class LoginPage {
  visit() {
    cy.visit('/')
  }

  fillUsername(username) {
    cy.get('#user-name').clear().type(username)
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password)
  }

  submit() {
    cy.get('#login-button').click()
  }

  login(username, password) {
    this.visit()
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }
}

export default new LoginPage()