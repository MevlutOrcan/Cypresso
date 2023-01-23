/// <reference types="cypress"/>
describe('ViewPorts',()=>{
    
    it('Iphone 8',()=>{
        cy.visit('https://amazon.com')
        cy.viewport('iphone-8');
        cy.screenshot()


    })
      
    it('macbook 16',()=>{
        cy.visit('/').viewport('ipad-mini');
        cy.viewport('macbook-16');
     


    })

    it.only('550,750',()=>{
        cy.visit('/').viewport(550,750);
        
     


    })


})