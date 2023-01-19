/// <reference types="cypress"/>
describe('Multiple Windows',()=>{
    
    it('Test Case 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
//Burdaki new window yazisina tiklayinca yeni pencerede aciliyordu
//ama Cypress acilan fazladan pencereleri isleme alamiyor
//Bu yuzden tiklayacagimiz element uzerinde manimulasyon yaparak
//target attribute unu siliyoruz ve boylelikle oradaki _blank degeri calismiyor
// sonuc olarak farkli bir sayfada degil de ayni sayfada aciyor ve uzerinde islem yapabiliyor
        cy.get('.example > a').invoke('removeAttr','target').click();
        cy.get('h3').should('have.text','New Window');


    })
      
    it.only('New Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then((element)=>{
            const newURL=element.prop('href')
        cy.visit(newURL);
        // Burda o elemente tiklamadan direkt olarak
        // onun href ine giderek yeni sayfa acmadan devam etmesini sagliyoruz
        })


    })


})