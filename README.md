# 🚀 Cypress SauceDemo Automation

Automação de testes **E2E** e **API** site [SauceDemo](https://www.saucedemo.com), utilizando **Cypress**, com foco em organização, reutilização de código e boas práticas.

---

## 🧠 Visão Geral

Este projeto tem como objetivo praticar automação de testes em um cenário real, cobrindo:

- **Testes de interface (E2E)**
- **Testes de API com cy.request()**
- **Organização com Page Object Model (POM)**
- **Execução automatizada via CI/CD**

---

## 🏗 Estrutura do Projeto

```bash
cypress/
├── e2e/
│   ├── api/
│   │   └── api.cy.js              # Testes de API
│   └── UI/
│       ├── cart.cy.js             # Testes do carrinho
│       ├── checkout.cy.js         # Testes de checkout
│       ├── inventory.cy.js        # Testes de produtos
│       ├── login.cy.js            # Testes de login
│       ├── login.users.cy.js      # Variação de usuários
│       └── menu.cy.js             # Testes de menu
│
├── fixtures/
│   └── example.json               # Massa de dados
│
├── pages/
│   └── LoginPage.js               # Page Object (Login)
│
├── screenshots/                   # Evidências de falha
│
├── support/
│   ├── commands.js                # Comandos customizados
│   └── e2e.js                     # Configuração global
📁 Outros arquivos
.github/                           # GitHub Actions (CI/CD)
cypress.config.js                  # Configuração do Cypress
package.json                       # Dependências
```
---
## 🧩 Padrão Utilizado

### Page Object Model (POM)

A camada de interação com a interface está isolada na pasta pages.
```
// LoginPage.js
login(username, password) {
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
}
```
---
## 💡 Benefícios
- **♻️ Reutilização de código**
- **🧹 Redução de duplicação**
- **📖 Maior legibilidade**
- **🔧 Manutenção facilitada**
---
## ⚙️ Tecnologias
- **Cypress**
- **JavaScript**
- **Node.js**
- **Allure Reports**
---

## 📦 Instalação
``` 
npm install
```
---

## ▶️ Execução dos Testes

### Executar todos os testes

```
npx cypress run
```

### Abrir modo interativo
```
npx cypress open
```
### Executar apenas API
```
npx cypress run --spec "cypress/e2e/api/api.cy.js"
```
### Executar apenas UI
```
npx cypress run --spec "cypress/e2e/UI/*.cy.js"
```
---
## 🧪 Cobertura de Testes
### UI (E2E)
- **Login com diferentes usuários**
- **Validação de login inválido**
- **Inventário de produtos**
- **Carrinho de compras**
- **Checkout**
- **Menu e logout**

### API
- **Status code**
- **Validação de rotas**
- **Requisições com cy.request()**
---

## 🔁 CI/CD (GitHub Actions + GitHub Pages)

O projeto possui pipeline automatizada utilizando GitHub Actions.

### ⚙️ Fluxo da pipeline
- **Instala dependências**
- **Executa testes Cypress em modo headless**
- **Gera relatório de execução (Allure)**
- **Publica automaticamente o relatório no GitHub Pages**

### 🌐 Publicação automática no GitHub Pages

Após cada execução da pipeline, o relatório é publicado automaticamente em:

👉 https://renatasatc.github.io/cypress-saucedemo/

Isso permite acompanhar os resultados dos testes de forma visual e acessível, sem necessidade de execução local.

### 📁 Estrutura relacionada
.github/workflows/

### 💡 Benefícios
- **Relatórios sempre atualizados após cada execução**
- **Visibilidade dos testes em tempo real**
- **Simulação de fluxo real de CI/CD usado no mercado**
- **Menos dependência de execução local**

### 📊 Relatórios (Allure)
```
npx cypress run
allure generate allure-results --clean -o allure-report
allure open allure-report
```
---

## 📸 Evidências

Screenshots automáticos em caso de falha:
```
cypress/screenshots/
```
---
## 💡 Diferenciais
- **Estrutura organizada por tipo de teste (UI / API)**
- **Uso de Page Object Model**
- **Pipeline CI/CD automatizada**
- **Publicação automática de relatórios**
- **Projeto alinhado com práticas de mercado**
---
## 🎯 Objetivo

Projeto desenvolvido para prática de automação com Cypress, aplicando boas práticas de engenharia de testes e CI/CD.