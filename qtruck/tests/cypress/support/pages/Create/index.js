import modal from '../components/Modal'

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
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)

        cy.get('input[id="name"]').type(foodtruck.name)
        cy.get('textarea[id="details"]').type(foodtruck.details)
        cy.get('input[id="openingHours"]').type(foodtruck.opening_hours)

        //Se a massa de dados de open_on_weekends existir, então se clica no botão Sim, caso a condição não exista, pode considerar o clique em Não
        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não')
            .click()

        // Condicional se a massa vier sim, clica no botão sim, se vier não, clica cno botão Não
        // if (foodtruck.open_on_weekends == 'Sim')
        //     cy.contains('button', 'Sim').click()
        // if (foodtruck.open_on_weekends == 'Não')
        //     cy.contains('button', 'Não').click()
    }

    submit() {
        cy.contains('button', 'Cadastrar')
            .click()
        cy.url()
            .should('be.equal', 'http://localhost:3000/map')

    }

}

export default new CreatePage()