/// <reference types="cypress"/>

describe('Login Test',()=>{

    
    it('Login Test1',()=>{
cy.visit('https://qa-environment.koalaresorthotels.com/');

//1. yol
//cy.get('#navLogon > .nav-link').click();

//2.yol
cy.contains('Log in').click();
//contains() dom da 'Log in' textini bul 

cy.url().should('include','Account/Logon');

//username : Manager

cy.get('#UserName').type('Manager');

//password : Manager1!
//1. yol
//cy.get('#Password').type('Manager1!');
//cy.get('#btnSubmit').click();

cy.get('#Password').type('Manager1!{enter}');

    })
      
    it('',()=>{



    })


})