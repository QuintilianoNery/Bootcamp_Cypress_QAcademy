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
    cy.get('input[name="instagram"]').type(perfil.loginValido.instagram, { log: false });
    cy.get('input[name="password"]').type(perfil.loginValido.senha, { log: false });
    cy.get('button[type="submit"]').click();

    cy.get('h2')
      .should('be.visible')
      .should('have.text', 'Escolha um food truck no mapa')

    cy.get('p[class="logged-user"]')
      .should('be.visible')
      .should('have.text', 'Olá, ' + perfil.nome);

  })

  // Não deve locar com senha inválida
  it('Must not login with incorrect password', () => {
    cy.get('input[name="instagram"]').type(perfil.loginValido.instagram, { log: false });
    cy.get('input[name="password"]').type(perfil.loginInvalido.senhaInvalida, { log: false });
    cy.get('button[type="submit"]').click();

    cy.get('div[class="swal2-html-container"]')
      .should('be.visible')
      .should('have.text', 'Credenciais inválidas, tente novamente!');

  });

  it('Must not login with incorrect instagram', () => {
    cy.get('input[name="instagram"]').type(perfil.loginInvalido.instagramInvalido, { log: false });
    cy.get('input[name="password"]').type(perfil.loginValido.senha, { log: false });
    cy.get('button[type="submit"]').click();

    cy.get('div[class="swal2-html-container"]')
      .should('be.visible')
      .should('have.text', 'Credenciais inválidas, tente novamente!');

  });

})