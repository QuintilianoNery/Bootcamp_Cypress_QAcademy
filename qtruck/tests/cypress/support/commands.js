// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (instagram, password) => {
  //Aqui se passa o parâmetro instagram e senha para o método login que vai ser digitado no teste
  cy.get('input[name="instagram"]').type(instagram, { log: false });
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('modalHaveText', (text) => {
  cy.get('div[class="swal2-html-container"]')
    .should('be.visible')
    .should('have.text', text);
})

Cypress.Commands.add('loggedUser', (name) => {
  cy.get('p[class="logged-user"]')
    .should('be.visible')
    .should('have.text', `Olá, ${name}`);
  cy.get('h2')
    .should('be.visible')
    .should('have.text', 'Escolha um food truck no mapa')
})