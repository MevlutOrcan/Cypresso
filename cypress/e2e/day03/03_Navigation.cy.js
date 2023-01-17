/// <reference types="cypress"/>
describe('Navigate',()=>{
    
    it('Back, Forward, Refresh',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        cy.wait(3000);
        cy.contains('Log in').click();
        cy.wait(3000);
        //cy.go("back");
        cy.go(-1); // Onceki Sayfaya Git
        cy.wait(3000);
        //cy.go("forward");
        cy.go(1); // Sonraki Sayfaya Git
        cy.wait(3000);
        cy.reload();
        cy.wait(3000);

        

    })
      
    it.only('Chaing Navigation',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        cy.wait(3000);
        cy.contains('Log in').click();
        cy.wait(3000);
        cy.go('back').wait(3000).go('forward').wait(3000).go(-1).go(1).reload(true);
        
        // reload(true); Sayfayi cache den/hafizadan  degil yeniden yukler

    })


})