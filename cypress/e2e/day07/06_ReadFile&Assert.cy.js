/// <reference types="cypress"/> 
// cok islem yaptigimiz icin artik burasi olmasada oluryor

describe('REadFile&Assert',()=>{
    
    it('Assert',()=>{
        cy.readFile('./cypress/fixtures/users.json').then((userdata)=>{
            expect(userdata[3].name).to.eq('Patricia Lebsack')
            expect(userdata[3].username).to.eq('Karianne')
            expect(userdata[3].address.street).to.eq('Hoeger Mall')
            expect(userdata[3].address.geo.lat).to.eq('29.4572')
        })


    })
      
    it('',()=>{



    })


})