import modal from '../components/Modal'

class LoginPage {

    constructor() {
        this.modal = modal
    }

    go() {
        cy.visit('/')
    }

    form(user) {
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password, { log: false })
    }

    submit() {
        cy.get('button[type="submit"]')
        .should('have.text', 'Entrar')
        .click()
    }

    goToSignup() {
        cy.contains('a', 'Cadastre-se').click()
    }

    
    validateUrl() {
        cy.url()
            .should('be.equal', 'http://localhost:3000')
    }
}

export default new LoginPage()