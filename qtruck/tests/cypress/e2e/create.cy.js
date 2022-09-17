/// <reference types="cypress" />

import mapPage from '../support/pages/Map'
// import createPage from '../support/pages/Create'

describe('Recomendação', () => {
    it('Deve recomendar um food truck', () => {
        const user = {
            name: 'Nery',
            instagram: '@qNeryCreate',
            password: '123456'
        }

        const foodtruck = {
            latitude: '-20.843802605852282',
            longitude: '-41.15502119064332',
            name: 'Subwai',
            details: 'O melhor lanche rápido da cidade.',
            opening_hours: 'Segunda à Sext, das 09h até 22h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        //Latitude e longitude do localStorage
        mapPage.createLink()

        cy.setGeolocacion(foodtruck.latitude, foodtruck.longitude)
            


        // createPage.form(foodtruck)
        cy.get('input[id = "name"]').type(foodtruck.name)
        cy.get('textarea[id = "details"]').type(foodtruck.details)
        cy.get('input[id = "openingHours"]').type(foodtruck.opening_hours)
        cy.get('button[type="button"]')
            .eq(1)
            .click()

        cy.wait(30000)


    });
});
