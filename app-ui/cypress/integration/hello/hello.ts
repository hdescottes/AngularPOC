import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('The user visit home page', () => {
    cy.visit("/home")
})

When('The user clicks on the Hello button from Home', () => {
    cy.intercept('GET', '/hello', {
        statusCode: 200,
        body: { title: 'hello word' }
    }).as('getHello')
    cy.get('button-app-root').contains('Hello').click()
    cy.wait("@getHello")
})

Then('The user see the hello word message', () => {
    cy.url().should('include', '/hello')
    cy.get('p').should('contain', 'hello word')
})
