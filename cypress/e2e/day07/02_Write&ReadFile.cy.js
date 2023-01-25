/// <reference types="cypress"/>
describe('Write&ReadFile',()=>{
    
    it('Write File',()=>{
cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','CYPRESS NOTES \n');
        //cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','1) Cypress Install')
cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','1) Cypress install \n',{flag:'a+'});
       
        //(\n) sayesinde alt satiar yazmasini saglariz
        //,{flag:'a+'} oncekini silme bunu ona ekle demek
cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','2) Plugins \n',{flag:'a+'});


    })
      
    it('Read File',()=>{
        cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain','Plugins');


    })


})