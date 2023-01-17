/// <reference types="cypress"/>
describe('SuperDomain',()=>{
    
    it('Test Case 1',()=>{
        //Super domainleri ayni olmak kaydiyla baska URL lere de gidebilir
        cy.visit('https://www.amazon.com/')
        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')



    })
    it('Test Case 1.5',()=>{
        cy.visit('https://www.cypress.io');
        cy.wait(2000);
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
        cy.wait(2000);

        // Burda da gidiyor gosteriyor ama incelemeyi yine yapamiyoruz



    })
    it('Test Case 2',()=>{
        //Burda ayni test icinde iki farkli siteye gidemez
        //Aslinda gidiyor ama inceletmedi.

       // cy.visit('https://www.google.com/')
       // cy.wait(3000)
        cy.visit('https://www.amazon.com/')
cy.wait(3000)
    })


})