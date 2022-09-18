class MapPage {

    loggedUser(name) {
        cy.get('p[class="logged-user"]')
            .should('be.visible')
            .should('have.text', `Olá, ${name}`);
        cy.get('h2')
            .should('be.visible')
            .should('have.text', 'Escolha um food truck no mapa')
    }

    createLink() {
        cy.get('a[href="/foodtrucks/create"]')
            .should('be.visible')
            .click()
        cy.url()
            .should('be.equal', 'http://localhost:3000/foodtrucks/create')
    }

    validateUrl() {
        cy.url()
            .should('be.equal', 'http://localhost:3000/map')
    }

}

export default new MapPage()