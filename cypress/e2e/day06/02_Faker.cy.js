/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

// buraya import edebiliriz ya da
// e2e dosyasina require('@faker-js/faker') seklinde de ekleme yapabiliriz
 //import { faker, faker } from '@faker-js/faker';
describe('',()=>{
   
    /*
    1-
    https://www.npmjs.com/package/@faker-js/faker
    2-
    npm install --save-dev @faker-js/faker


    */
    
    it('',()=>{
        cy.visit('https://hubcomfy.com/my-account-2/');

        
        let email=faker.internet.email();
        let password=faker.internet.password();

        cy.get('#username').type(email)
        cy.get('#password').type(email)

        cy.get('#signin > .woocommerce-form > .woocommerce-button').click();

        cy.get('#signin > .woocommerce-form > .submit-status').should('be.visible');

      
    })

})