/// <reference types="cypress"/>
describe('Login Menu Test',()=>{
    
    it.skip('Test Case 1',()=>{
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        cy.contains('New User Signup!').should('be.visible');
        cy.get('[type="text"]').should('be.visible');

    })
      
    it('Test Case 2',()=>{
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        //1.yol
        cy.get('div>h2[class="or"]').should('contain','OR');

        //2.yol
        cy.get('div>h2[class="or"]').then(ortext =>{
            expect(ortext.text()).to.equal('OR');
        })
        //3.yol
        cy.get('div>h2[class="or"]').invoke('text').then(ortext2 =>{
            expect(ortext2).to.equal('OR');
        })



    })


})