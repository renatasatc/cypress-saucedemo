import loginPage from '../pages/LoginPage'

Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  loginPage.login(username, password)
})