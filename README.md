🚀 Cypress SauceDemo Automation

Automação de testes E2E e API do SauceDemo utilizando Cypress, com foco em organização, reutilização de código e boas práticas.

🧠 Visão Geral

Este projeto simula um ambiente real de automação de testes, aplicando:

Testes E2E (interface do usuário)
Testes de API com cy.request()
Page Object Model (POM)
Integração com CI/CD (GitHub Actions)
🏗 Estrutura do Projeto

A estrutura segue uma organização clara e escalável:

cypress/
├── e2e/
│   ├── api/
│   │   └── api.cy.js             # Testes de API
│   └── UI/
│       ├── cart.cy.js            # Testes do carrinho
│       ├── checkout.cy.js        # Testes de checkout
│       ├── inventory.cy.js       # Testes de produtos
│       ├── login.cy.js           # Testes de login
│       ├── login.users.cy.js     # Variações de usuários
│       └── menu.cy.js            # Testes de menu
├── fixtures/
│   └── example.json              # Massa de dados
├── pages/
│   └── LoginPage.js              # Page Object
├── screenshots/                  # Evidências de falha
├── support/
│   ├── commands.js               # Comandos customizados
│   └── e2e.js                   # Configuração global

Outros arquivos importantes:

.github/                          # Pipeline CI/CD
cypress.config.js                 # Configuração do Cypress
package.json                      # Dependências
🧩 Padrão Utilizado
Page Object Model (POM)

A camada de interação com a UI está isolada em pages/.

// LoginPage.js
login(username, password) {
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
}

Benefícios:

Menos duplicação
Testes mais limpos
Manutenção simplificada
⚙️ Tecnologias
Cypress
JavaScript
Node.js
Allure (relatórios)
📦 Instalação
npm install
▶️ Execução
# Executar todos os testes
npx cypress run

# Abrir modo interativo
npx cypress open

# Apenas API
npx cypress run --spec "cypress/e2e/api/api.cy.js"

# Apenas UI
npx cypress run --spec "cypress/e2e/UI/*.js"
🧪 Cobertura de Testes
UI (E2E)
Login (válido e inválido)
Variação de usuários (login.users.cy.js)
Inventário de produtos
Carrinho
Checkout
Menu e logout
API
Validação de status code
Testes de rotas
Respostas HTTP
🔁 CI/CD (GitHub Actions)

O projeto possui pipeline automatizada com GitHub Actions.

📁 Local:

.github/workflows/
O que a pipeline faz:
Instala dependências
Executa os testes Cypress
Falha automaticamente se algum teste falhar
Exemplo:
name: Cypress Tests

on:
  push:
    branches: ["main"]
  pull_request:

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npx cypress run
📊 Relatórios (Allure)
npx cypress run
allure generate allure-results --clean -o allure-report
allure open allure-report
## 📊 Relatório Online

O relatório de execução pode ser acessado em:

👉 https://renatasatc.github.io/cypress-saucedemo/
📸 Evidências

Screenshots automáticos em falhas:

cypress/screenshots/
💡 Diferenciais
Estrutura organizada por tipo de teste
Separação clara entre UI e API
Uso de Page Object Model
Pipeline CI/CD integrada
Cobertura de fluxos principais da aplicação
🎯 Objetivo

Projeto desenvolvido para prática de automação com Cypress, aplicando padrões utilizados no mercado.