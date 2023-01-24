/// <reference types="cypress"/>
describe('PayLinnBank',()=>{
    before(function(){
        cy.fixture('paylinn').then(function(data){
            this.data=data;
        })
    })
    
    it.only('PayLinnBank Login Test',function(){

        cy.visit(this.data.url);
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click();

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username);
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
        cy.get('.MuiButton-label').click();
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text','Welcome');

    })
      
    it('',()=>{



    })


})