/// <reference types="cypress"/>
describe('Login Test',()=>{
    
    it('Positive Login',()=>{

        const username='Manager';
        const password='Manager1!';
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        cy.contains('Log in').click();

        cy.get('#UserName').type(username);
        cy.get('#Password').type(password);
        cy.get('#btnSubmit').click();

        cy.url().should('include','Admin/UserAdmin');
        cy.get('.UserName').should('contain','manager');



    })
      
    it.only('Negative Login',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        cy.contains('Log in').click();

        const username='Manager';
        const password='Manager';

        cy.get('#UserName').type(username);
        cy.get('#Password').type(password);
        cy.get('#btnSubmit').click();

        cy.get('.validation-summary-errors > span').
        should('have.text','Try again please');

        cy.get('.validation-summary-errors > ul > li').
        should('have.text','Username or password is incorrect, please correct them and try again');

    })


})