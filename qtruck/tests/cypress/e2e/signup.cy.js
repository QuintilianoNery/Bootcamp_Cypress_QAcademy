/// <reference types="cypress" />
const profile = require('../fixtures/profile');
import signupPage from '../support/pages/Signup'
import mapPage from '../support/pages/Map'


describe('Signup', () => {
    beforeEach(() => {
        signupPage.go()
    })
    
    it('Deve cadastrar um novo usuário', () => {
        const user = {
            name: 'Quin teste',
            instagram: '@quin_teste',
            password: '1234'
        }
        
        cy.deleteMany({ instagram: user.instagram }, { collection: 'users' }).then(res => {
            cy.log(res);
        });
        
        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')

    })
});