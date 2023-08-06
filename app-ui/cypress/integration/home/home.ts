import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('The user visit home page', () => {
    cy.visit("/home")
})

Then('The user see the title', () => {
    cy.get("h1").contains("Default page")
})