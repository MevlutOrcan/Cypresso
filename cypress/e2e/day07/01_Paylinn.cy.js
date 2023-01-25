/// <reference types="cypress"/>


import HomePage from "../POM/HomePage.cy";
import LoginPage from "../POM/LoginPage.cy";

describe('PayLinnBank',()=>{
    before(function(){
        cy.fixture('paylinn').then(function(data){
            this.data=data;
        })
    })
    
    it.only('PayLinnBank Login Test',function(){

        const homePage = new HomePage();
        const loginPage=new LoginPage();


        cy.visit(this.data.url); 

        //cy.get('[href="/login"] > .header__option > .header__lineTwo').click();
        homePage.getSignInLink().click()

        //cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username);
        loginPage.getUserNameBox().type(this.data.username);
        
        //cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
        loginPage.getPasswordBox()

        //cy.get('.MuiButton-label').click();
        loginPage.getLoginButton().click();


        //cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text','Welcome');
        loginPage.getWelcomeText().should('have.text','Welcome');


    })
      
    it('',()=>{



    })


})