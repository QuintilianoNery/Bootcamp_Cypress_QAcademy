import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {
        const user = {
            name: 'Nery',
            instagram: '@qNeryCreate',
            password: '123456'
        }

        const foodtruck = {
            latitude: '-20.84314585715167',
            longitude: '-41.15536183118821',
            name: 'Lanche do Neguito',
            details: 'O melhor lugar para lanchar',
            opening_hours: 'das 14h às 20h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
        mapPage.validateUrl()

    })

    it('Não deve cadastrar foodtruck com o nome duplicado', () => {
        //A massa de testes deve ser independente
        //Latitude e longitude deve ser única
        //Deve corrigr um BUG

        const user = {
            name: 'Margarete',
            instagram: '@margarete22',
            password: '123456'
        }

        const foodtruck = {
            latitude: '-20.853312607335994',
            longitude: '-41.15420043468476',
            name: 'Supermecado Rodrigues',
            details: 'Compras rápidas, mata fome',
            opening_hours: 'das 08h às 20h',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')

    });

    it.only('Todos os campos obrigatórios', () => {
        const user = {
            name: 'Vanessa',
            instagram: '@aanessaCreate',
            password: '123456'
        }

        const foodtruck = {
            latitude: '-20.849061505431642',
            longitude: '-41.14785969257355',
            name: 'Padaria Super Pão com recheio',
            details: 'Rápido Fácil e prático',
            opening_hours: 'das 14h às 20h',
            open_on_weekends: true
        }

        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'

        //Uso usuário cadastrado
        cy.apiCreateUser(user)
        //Realizo login
        cy.uiLogin(user)

        //Clico no botão para incluir 
        mapPage.createLink()

        //Seta a geolocalização
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        
        //Clica em submit 
        createPage.submit()
        createPage.modal.haveText(message)
        createPage.validateUrl()


    });

})