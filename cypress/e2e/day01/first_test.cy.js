/// <reference types="cypress"/>
describe('My First Test',()=>{
      // describe: Testi tanimliyorum
      // describe ve itmocha dan geliyor
      
    it('URL Test',()=>{
      cy.visit('https://www.google.com/');
      // visit(URL): URL e gitti

      cy.url().should('include','google');
      // should assert icin kullanilir
      // cy.url().should('include','google'); -->> url google icerir mi?

    })
      
    it('Title Test',()=>{
        cy.visit('https://www.google.com/');
        cy.title().should('include','Google');
        // title Google iceriyor mu ?

        cy.title().should('eq','Google');
        // title Google a esit mi


    })


})