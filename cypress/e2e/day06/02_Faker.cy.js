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
         cy.visit('https://automationexercise.com/login')
        let cakmaName = faker.name.fullName()
        let cakmaEmail = faker.internet.email()      // email olustur dedik    let,var, const  javascript degiskenler
        let adress=faker.address.street();
        let firstName=faker.name.firstName('female');
        let lastName=faker.name.lastName();
        let state=faker.address.state()
        let city=faker.address.city();
        let zipCode=faker.address.zipCodeByState('###-###')

        let phone=faker.phone.number('###-###-####');
        cy.get('[type="text"]').type(cakmaName);
        cy.get('.signup-form > form > [type="email"]').type(cakmaEmail);
        cy.get('.signup-form > form > .btn').click();
        cy.get('#id_gender2').click();
        //cy.get('#name').type(cakmaName);
        cy.get('#password').type(cakmaEmail);
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
        cy.get('#address1').type(adress);
        cy.get('#country').select(2);
        cy.get('#country').select(5);
        cy.get('#country').select('Israel');//Israel
        cy.get('#country').select('New Zealand');//Israel
        //dropdown menu secerken select icine 1)index 2)value ve 3)munude cıkan text yazilarak secilebilir
        
        cy.get('#state').type(state);
        cy.get('#city').type(city);
        cy.get('#zipcode').type(zipCode);
        cy.get('#mobile_number').type(phone);
        cy.get('.login-form > form > .btn').click();
        cy.get('b') .should('be.visible');

        cy.get('.pull-right > .btn').click();
        cy.get('b').should('contains.text',cakmaName)
        
      
    })

})