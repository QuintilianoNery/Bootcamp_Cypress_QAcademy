import modal from '../components/modal'

class CreatePage {

    //Construtor com a característica Moal
    constructor() {
        this.modal = modal
    }

    //Função
    go() {
        cy.visit('/foodtrucks/create')
    }

    form(foodtruck) {
        cy.get('input[id = "name"]').type(foodtruck.name)
        cy.get('textarea[id = "details"]').type(foodtruck.description)
        cy.get('input[id = "openingHours"]').type(foodtruck.opening_hours)
        cy.get('button[type="button"]')
            .eq(1)
            .click()


    }

    submit() {

    }

}

export default new CreatePage()