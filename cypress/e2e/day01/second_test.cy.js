/// <reference types="cypress"/>

// describe yerine context de kullanabiliriz
context('My Second Test',()=>{
    
    beforeEach('Her testten once calisacak',()=>{
        cy.visit('');

    });

    it('URL Test',()=>{
cy.url().should('include','google');
cy.url().should('equal','https://www.google.com/');// eq yerine equals da kullanabiliriz


    })
      
    it('Title Test',()=>{
        cy.title().should('include','Google');
        cy.title().should('eq','Google');



    })

    it.skip('Search Test',()=>{
        //cy.get('.gLFyf').type('Cypress.io{enter}');  // -->> kendi aldigi locate
        cy.get("[name='q']").type('Cypress.io{enter}'); // --->> Manuel locate
        // *****SADECE CSS locator CALISIYOR*****
        // get() : locate aliyoruz
        // type() : metin gonderiyoruz
        // {enter} : Yaziyi gondermek icin



    })
      // it.skip()  -->> testi yapmadan gecer
    it.skip('Search Test2',()=>{
        cy.get('.gLFyf',{timeout: 3000}).type('Cypress.io{enter}');


    })

    // it.only -->> sadece bu testi calistir
    it('Click',()=>{
        cy.get('.gb_e').click();
        // bir elemente tiklamak icin .click() kullanirim


    })


})