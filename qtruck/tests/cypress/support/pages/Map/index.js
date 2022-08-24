class MapPage {

    loggedUser(name) {
        cy.get('p[class="logged-user"]')
            .should('be.visible')
            .should('have.text', `Olá, ${name}`);
        cy.get('h2')
            .should('be.visible')
            .should('have.text', 'Escolha um food truck no mapa')
    }

}

export default new MapPage()