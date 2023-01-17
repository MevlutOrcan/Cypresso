/// <reference types="cypress"/>
describe('Suggested Elements',()=>{
    
    it('Test Case 1',()=>{
cy.visit('https://www.google.com');
cy.get('.gLFyf').type('Yahoo');
cy.get('li b').contains('giri').click();


    })
      
    it.skip('Test Case 2',()=>{

        cy.visit('https://www.automationexercise.com/');

    })


})