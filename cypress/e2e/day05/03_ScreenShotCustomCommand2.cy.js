/// <reference types="cypress"/>
describe('',()=>{
    
    it('',()=>{
        const product="apple";
        cy.amazonSearch(product);
        //Ust satirda command.js dosyasinda olusturulan fonksiyon cagirlidi
        // icine verilen parametreyi arama yapti

        cy.get('.a-color-state.a-text-bold').should('contain.text',product);
        cy.get('#twotabsearchtextbox').should('have.value',product);
        //Yukarıdakı ıkı satırda result olarak cıkan iphone dogrulaması yapıldı
        //Textbox'a girilen iphone gercekten girilmismi baktık (value'sunu alarak)

       // cy.screenshot()
       // Tum sayfanin resmini yukardaki bu kodla aldi
       // Alirken de tum sayfanin kaydira kaydira screenshot unu aldi

        cy.get('.a-color-state.a-text-bold').screenshot();
        // Yukarda da sadece bir elementin screenshot unu aldi


    })


})