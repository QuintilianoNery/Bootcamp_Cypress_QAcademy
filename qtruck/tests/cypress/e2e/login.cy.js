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
    cy.login(profile.loginValid.instagram, profile.loginValid.password);
    cy.loggedUser(profile.name);

  })

  it('Must not login with incorrect password', () => {
    cy.login(profile.loginValid.instagram, profile.invalidLogin.invalidPassword);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });

  it('Must not login with incorrect instagram', () => {
    cy.login(profile.invalidLogin.InvalidInstagram, profile.loginValid.password);
    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  });

  //Desafio 1
  it('Instagram must be mandatory', () => {
    cy.loginInstagramBlank(profile.loginValid.password);
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  });

  it('Password must be mandatory', () => {
    cy.loginPasswordBlank(profile.loginValid.instagram);
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  });
  
  it('All fields are mandatory', () => {
    cy.get('button[type="submit"]').click();
    cy.modalHaveText('Por favor, informe suas credenciais!')
  });
});

//Notas:
//Refatorar escrita da importação da massa de dados para inglês, e ir praticando a escrita toda em inglês