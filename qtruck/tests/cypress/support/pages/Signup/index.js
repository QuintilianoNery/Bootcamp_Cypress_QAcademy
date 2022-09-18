import modal from '../components/Modal'

class SignupPage {

    constructor() {
        this.modal = modal
    }

    go() {
        cy.visit('/signup')
    }

    form(user) {
        if (user.name) cy.get('input[name=name]').type(user.name)
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }

    validateUrl() {
        cy.url()
            .should('be.equal', 'http://localhost:3000/signup')
    }
}

export default new SignupPage()