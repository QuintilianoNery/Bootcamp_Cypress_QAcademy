/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json');

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    // cy.screenshot();
  });
  //Login com sucesso
  it('Must login successfully', () => {
    cy.get('input[name="instagram"]').type(perfil.instagram, { log: false });
    cy.get('input[name="password"]').type(perfil.senha, { log: false });
    cy.get('button[type="submit"]').click();

    cy.get('h2')
      .should('be.visible')
      .should('have.text', 'Escolha um food truck no mapa')
      
    cy.get('p[class="logged-user"]')
      .should('be.visible')
      .should('have.text', 'Olá, ' + perfil.nome);

  })

})