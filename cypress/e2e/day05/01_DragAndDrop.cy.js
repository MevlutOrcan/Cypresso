/// <reference types="cypress"/>
describe('Drag And Drop',()=>{
    
    it.only('',()=>{

        //Install using npm:
        //npm install --save-dev @4tw/cypress-drag-drop 
        //require('@4tw/cypress-drag-drop')     -->> e2e
cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
cy.get('#column-a').wait(2000)  //  -->> Suruklenecek element 
.drag('#column-b').wait(2000)   //  -->> Uzerine suruklenecegi element



    })
      
    it('',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        const dataTransfer=new DataTransfer();
        cy.get('#column-a').trigger('dragstart',{
            dataTransfer
        })

cy.get('#column-b').trigger('drop',{
    dataTransfer
})


    })


})