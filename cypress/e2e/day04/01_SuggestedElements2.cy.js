/// <reference types="cypress"/>
describe('Suggested Elements',()=>{
    
    it('Test Case',()=>{
        cy.visit('/');
       
        cy.get('.gLFyf').type('dress');
        cy.get('[class="erkvQe"]').contains('dress code').click();
        cy.wait(2000);
        cy.get("#result-stats").contains('result').should('be.visible');

    }) })