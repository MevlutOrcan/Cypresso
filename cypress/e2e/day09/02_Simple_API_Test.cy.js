/// <reference types="cypress"/>



describe('Simple API Test',()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments';
    
    it('Header Assert',()=>{
cy.request(requestURL).its('headers').its('content-type')
.should('contain','application/json; charset=utf-8')


    })
      
    it('Header Assert',()=>{
    cy.request({
        method: 'GET',
        url: requestURL
        //url='https://jsonplaceholder.cypress.io/comments'
    })
    .its('headers').its('content-type')
    .should('contain','application/json; charset=utf-8')

    })


})