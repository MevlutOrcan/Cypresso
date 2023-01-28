/// <reference types="cypress"/>
describe('DELETE',()=>{
    
    it('test',()=>{
    cy.request({
        url:'https://dummy.restapiexample.com/api/v1/delete/2',
        method:'DELETE'
    }).then((response)=>{
        expect(response.body.data).to.eq('2')
        expect(response.body.message).to.eq("Successfully! Record has been deleted")
        expect(response.body.status).to.eq("success")
    })


    })
      
    it('',()=>{



    })


})