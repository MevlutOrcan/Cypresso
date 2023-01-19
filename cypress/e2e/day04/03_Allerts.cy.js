/// <reference types="cypress"/>
describe('Allerts',()=>{
    
    it('Allert Test',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000);
    cy.get(':nth-child(1) > button').click();
    //js alert lerde cypress otomatik olarak tamama tiklar
    cy.get('#result').should('have.text','You successfully clicked an alert');


    })
      
    it('Accept Alert Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000);
        cy.get(':nth-child(2) > button').click();
        //js alert lerde cypress otomatik olarak tamam'a tiklar
        cy.get('#result').should('have.text','You clicked: Ok');

        


    })

    it('Dismis Alert Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000);
        cy.get(':nth-child(2) > button').click();
        //Cypress otomatik olarak Tamam Butonuna tikladi

        cy.on('window:confirm',()=>{
            //on() jquery bir fonksiyondur
            // Browserda acilan (window)jsAlert ler icin kullanilir
            return false;
            //return true=> yazsaydık ok tıklardı ama buna gerek yok cunku clıck() yaptıgımızda default olarak tamam'a tıklar

        })
        //JS Alert te cypress standart olarak onaylamaya programlanmistir
        //Bu kisimda tamam a degil de iptale tiklamak istiyorsak 
        //cy.on() komutunu kulllanmaliyiz ve bize false dondermesini saglamaliyiz
        //mealen false i onayla demis oluyoruz
        cy.get('#result').should('have.text','You clicked: Cancel');
        

    })

    it.only('',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000);

        cy.window()//popup pencereleri kontrol ediyoruz
        .then(($windowsElement)=>{
            //($windowsElement) promt a bilgi girer alert().sendKeys('...') gibi
            cy.stub($windowsElement,'prompt').returns('Cypress bu ayip oldu')
            cy.wait(4000)
        })

        cy.get(':nth-child(3) > button').click();

        cy.get('#result').should('have.text','You entered: Cypress bu ayip oldu');
        

    })


})