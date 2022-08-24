/// <reference types="cypress" />
const profile = require('../fixtures/profile');


describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  //Login com sucesso
  //Utilizando Custom Commands, apenas se passa os valores de cada comando personalizado
  //nesse caso estou passando os valores da minha massa de dados que está em fixtures
  it('Must login successfully', () => {
    cy.login(profile.validLogin.instagram, profile.validLogin.password);
    cy.loggedUser(profile.name);

  })

  it('Must not login with incorrect password', () => {
    cy.login(profile.validLogin.instagram, profile.invalidLogin.password);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });

  it('Must not login with incorrect instagram', () => {
    cy.login(profile.invalidLogin.instagram, profile.validLogin.password);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });

  //Desafio 1  
  it('Instagram must be mandatory', () => {
    cy.login(profile.nullLogin.instagram, profile.validLogin.password);
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  });

  it('Password must be mandatory', () => {
    cy.login(profile.validLogin.instagram, profile.nullLogin.password);
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  });
  
  it('All fields are mandatory', () => {
    cy.get('button[type="submit"]').click();
    cy.modalHaveText('Por favor, informe suas credenciais!')
  });
});
