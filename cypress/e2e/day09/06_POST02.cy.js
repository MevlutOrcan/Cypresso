/// <reference types="cypress"/>
describe('',()=>{
    const requestURL='https://dummy.restapiexample.com/api/v1/create'
    it('',()=>{
        const bodyRequest={
            "name":"testerr",
            "salary":"123",
            "age":"23"
        }
        cy.request({url: requestURL,
                    method : 'POST',
                    body: bodyRequest})
                    .then((response)=>{
                        expect(response.status).to.eq(200)
                        expect(response.body.status).to.eq('success')
                        expect(response.body.message).to.eq('Successfully! Record has been added.')
                        expect(response.body.data.name).to.eq('testerr')
                        expect(response.body.data.age).to.eq('23')
                    })

           

    })
      
    it('',()=>{



    })


})