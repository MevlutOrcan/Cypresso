/// <reference types="cypress"/>
describe('Before After',()=>{
    before(()=>{
        cy.log('Her Test Dosyasindan Once 1 Kere Calistir');
    })
    after(()=>{
        cy.log('Her Test Dosyasindan Sonra 1 Kere Calistir');
    })
    beforeEach(()=>{
        cy.log('Her Testten Once Bir kere Calsitir')
    })
    afterEach(()=>{
        cy.log('Her Testten Sonra Bir kere Calsitir')
    })


    
    it('Test Case 1',()=>{
        cy.log('Test Case 1');



    })
      
    it('Test case 2',()=>{
        cy.log('Test Case 2');


    })


})