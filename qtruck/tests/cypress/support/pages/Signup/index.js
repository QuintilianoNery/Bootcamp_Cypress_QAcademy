import modal from '../components/modal'
class SignupPage {
    //Construtor com a característica Moal
    constructor(){
        this.modal = modal
    }

    //Função
    go() {
        cy.visit('/signup')
    }

    form(user) {
        //Aqui se passa o parâmetro instagram e senha para o método login que vai ser digitado no teste

        if (user.name) cy.get('input[name="name"]').type(user.name, { log: false });
        if (user.instagram) cy.get('input[name="instagram"]').type(user.instagram, { log: false });
        if (user.password) cy.get('input[name="password"]').type(user.password, { log: false });
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default new SignupPage()