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
        }
    
        submit() {
    
            cy.contains('button', 'Cadastrar')
            .click()
        }

}

export default new CreatePage()