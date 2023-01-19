/// <reference types="cypress"/>
describe('IFrame',()=>{
    
    it('IFrame Test',()=>{
cy.visit('https://the-internet.herokuapp.com/iframe')
/*
Iframe ile ilgili yapmamiz gerekenler
1) Plugin indir
https://www.npmjs.com/package/cypress-iframe den 
npm install -D cypress-iframe komutunu al ve terminalde calistir

2) Import Plug in
//require('cypress-iframe');  or  import 'cypress-iframe';
// support dosayindaki e2e dosyasina ekliyoruz

3) Bu islemden sonra cy.fromLoaded() ve cy.iframe() komutlarina ulasmis olacagiz

*/

cy.frameLoaded('#mce_0_ifr')

    })
      
    it('',()=>{



    })


})