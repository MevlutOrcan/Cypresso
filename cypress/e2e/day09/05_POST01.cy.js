/// <reference types="cypress"/>
describe('',()=>{
    
    const requestURL='https://jsonplaceholder.cypress.io/comments';

    it('Test',()=>{
        cy.request('POST',requestURL,{
            userId:501,
            title:'cypress cok kolay',
            body:"JavaScript daha kolay"
        }).then((response)=>{
            assert.equal(response.status,201)
            expect(response.body.userId).to.eq(501  )
            expect(response.body.title).to.eq("cypress cok kolay")
            expect(response.body.body).to.eq("JavaScript daha kolay")
        })


    })
      


})