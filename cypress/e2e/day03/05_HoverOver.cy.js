/// <reference types="cypress"/>
describe('HoverOver',()=>{
    
    it('',()=>{
    cy.visit('https://www.amazon.com/');
    cy.get('.icp-nav-link-inner').trigger('mouseover');

    cy.wait(3000);
    cy.contains('Change country/region.').click();

    cy.get('.a-button-inner .a-dropdown-prompt').click();
    cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})
    

    })
      
    it('',()=>{



    })


})