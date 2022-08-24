import modal from '../components/modal'
class LoginPage {
    //Construtor com a característica Moal
    constructor(){
        this.modal = modal
    }

    //Função
    go() {
        cy.visit('/')
    }

    form(instagram, password) {
        //Aqui se passa o parâmetro instagram e senha para o método login que vai ser digitado no teste
        if (instagram) cy.get('input[name="instagram"]').type(instagram, { log: false });
        if (password) cy.get('input[name="password"]').type(password, { log: false });
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default new LoginPage()