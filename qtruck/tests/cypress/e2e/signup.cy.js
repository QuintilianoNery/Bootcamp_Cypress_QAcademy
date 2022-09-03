/// <reference types="cypress" />
const profile = require('../fixtures/profile');
import signupPage from '../support/pages/Signup'
import mapPage from '../support/pages/Map'
import Signup from '../support/pages/Signup';


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

        // cy.deleteMany({ instagram: user.instagram }, { collection: 'users' }).then(res => {
        //     cy.log(res);
        // });

        //Usando a rota criada em HelpersControllers.ts com Custom commands
        cy.apiResetUser(user.instagram)

        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')

    })

    it.only('Não deve cadastrar com instagram duplicado', () => {
        const user = {
            name: 'Quin Duplicado',
            instagram: '@quin_duplicado',
            password: 'pwd132'
        }
    
        cy.apiCreateUser(user)

        signupPage.form(user)
        signupPage.submit()
        signupPage.modal.haveText('Instagram já cadastrado!')


    });
})
