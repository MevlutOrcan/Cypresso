/// <reference types="cypress"/>
describe('Custom Command',()=>{
    
    it('Positive Login',()=>{
cy.visit('https://hubcomfy.com/my-account-2/');
cy.wait(3000);

cy.get('#username').type('mevlutorcan@gmail.com');
cy.get('#password').type('Zaq12wsx{enter}');

cy.wait(3000);

cy.get('.login > span').should('be.visible');






    })
      
    it('Negative Test',()=>{
cy.hubcomfyLogin('mevlutorcan@gmail.com','Zaq12wsx');
//command.js dosyasinda olusturdugumuz fonksiyonu kullanarak giris yaptik parametre olarak email-pass yazdik
cy.wait(3000);
cy.get('.login > span').should('be.visible');
cy.get('.greeting > :nth-child(1)').should('include.text','mevlutorcan');

    })

    it.only('Negative Test',()=>{

cy.hubcomfyLogin('mevlutorcan@gmail.com','Zaq12wsxXXX');
//command.js dosyasinda olusturdugumuz fonksiyonu kullanarak giris yaptik parametre olarak email-pass yazdik
cy.wait(3000);

cy.get('#signin > .woocommerce-form > .submit-status').should('have.text','Wrong username or password.')

cy.get('#signin > .woocommerce-form > .submit-status').should('be.visible');

cy.url().should('include','my-account-2');

    })


})