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

cy.frameLoaded('#mce_0_ifr');
//Iframe in icine girmek icin bunu kullaniyoruz

cy.iframe().find('p').clear();
//Simdi de Iframenin icindekileri sildirdik
// IFrame icindeki islemleri yapmak icin 
//cy.iframe().find('p')
cy.iframe().find('p').type('Birakin Gelsin Gel Hele Hel Gel :) :) ');
// Iframe icine yazi gonderdik

//1. yol Yeni window (Calismadi)
// cy.get('.large-4 > div > a').then((element)=>{
//     const newURL=element.prop('href');

//     cy.visit(newURL);
// })

//2. yol Yeni window (Calismadi)
//cy.get('.large-4 > div > a').invoke('removeAttr','target').should('contain.text','Elemental Selenium').click();

// Yukarda iki sekilde de yeni pencereye gidemedik cunku base url degisti 
// Yoksa giderdik yani :)

// IFrame disina cikip ordan linke tikliyor
// Iframe den cikmak icin extra birsey yapmiyoruz 
// Iframe e girisi biz yapmamiz lazim ama cikisi otomatik yapiyor

cy.iframe().find('p').type('Birakin Gelsin Gel Hele Hel Gel :) :) ');
cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click();
//Iframe Ile alakali Iframe den ciktiktan sonra tekrar girmak icin IFrameLoaded a gerek olmuyor

    })
      
    it('',()=>{



    })


})