/// <reference types="cypress" />
const profile = require('../fixtures/profile');
import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {
  beforeEach(() => {
    loginPage.go()
  });
  //Login com sucesso
  it('Must login successfully', () => {
    loginPage.form(profile.validLogin.instagram, profile.validLogin.password)
    loginPage.submit()
    mapPage.loggedUser(profile.name)
  })

  it('Must not login with incorrect password', () => {
    loginPage.form(profile.validLogin.instagram, profile.invalidLogin.password)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Must not login with incorrect instagram', () => {
    loginPage.form(profile.invalidLogin.instagram, profile.validLogin.password)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  //Desafio 1  
  it('Instagram must be mandatory', () => {
    loginPage.form(profile.nullLogin.instagram, profile.validLogin.password)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('Password must be mandatory', () => {
    loginPage.form(profile.validLogin.instagram, profile.nullLogin.password)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('All fields are mandatory', () => {
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
})
