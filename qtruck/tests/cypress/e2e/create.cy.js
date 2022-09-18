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
            opening_hours: 'das 14h às 20h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()

        createPage.form(foodtruck)
        createPage.submit()


    })

})