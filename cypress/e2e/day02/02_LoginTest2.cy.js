/// <reference types="cypress"/>



describe('Login Test2',()=>{
    
    it('Login Asserts',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');

        //1. yol contains('text');
      // cy.contains('Log in').click();

      //2.yol
      //contains('locator','text');
       //cy.contains('.nav-link','Log in').click();
       //cy.contains('li','Log in').click;

       //3. yol 
       // buyuk kucuk harf duyarliligini dikkate alma demek icin {matchCase:false}
       cy.contains('log in',{matchCase:false}).click();

       //ASSERT

       //1.yol have.text
       cy.get('#navLogon > .nav-link').should('have.text','Log in');
       //locate edilen yerdeki metinde og in yaziyor mu? Var mi?




       //2.yol
       cy.url().should('include','Account/Logon');


       //3.yol be.visible
       cy.get('.row > .mb-4').should('be.visible')



       //4.yol cy.title
        cy.title().should('eq','KoalaResortHotels - Log in');


       //5.yol include.text
       cy.get('#navLogon > .nav-link').should('include.text','Log in');
        //locate edilen yerdeki metin Log in iceriyor  mu?

        //Toplam link sayisi
        cy.get('li a').should('have.length',29);

        //find() belirli bir html seciminin child lerine ulsamak icin
        cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2');
        //cy.find() seklinde bir kullanimi yok.
        // burda li nin icinde ustteki locateyi buluyoruz sonrasi assert islemi zaten


        //within() 
        cy.get('div.categories').within(()=>{
            cy.get('a[href="/Rooms/320"]').click();
        })

        //Parent : div.categories
        //child : a[href="/Rooms/320"]

        /*
        web elementleri ilk olarak get() ile bulacagiz
        get() ile buklamazsak find() ile deneyecegiz
        onla da bulamazsak within() ile deneyecegiz
        */



    })
      
    it('',()=>{



    })


})