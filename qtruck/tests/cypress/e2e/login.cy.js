/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json');

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  //Login com sucesso
  it('Must login successfully', () => {
    cy.login(perfil.loginValido.instagram, perfil.loginValido.senha);
    cy.loggedUser(perfil.nome);

  })

  // Não deve locar com senha inválida
  it('Must not login with incorrect password', () => {
    cy.login(perfil.loginValido.instagram, perfil.loginInvalido.senhaInvalida);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });

  it('Must not login with incorrect instagram', () => {
    cy.login(perfil.loginInvalido.instagramInvalido, perfil.loginValido.senha);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });
});