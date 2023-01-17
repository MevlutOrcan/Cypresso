/// <reference types="cypress"/>
describe('Scroll',()=>{
    
    it('Scrollintoview',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
       // cy.get('.col-md-7 > .mb-4').scrollIntoView();
        // Sayfayi Locate ettigimiz yerin altina getirir

        cy.wait(2000);

       // cy.get(':nth-child(9) > .container > .justify-content-center').scrollIntoView({duration: 8000});
        //  scrollIntoView({duration: 8000});  -->>8 saniyede oraya gel diyoruz
        cy.get(':nth-child(9) > .container > .justify-content-center').scrollIntoView({offset: {top: 150,left:0}});
cy.wait(2000);
        cy.scrollTo(0,0);
        //En yukari cikmak icin
        
cy.wait(2000);

        cy.scrollTo(0,700);
        //Sayfayi bu kadar asagi indir

        cy.wait(2000);
        cy.scrollTo('bottom');
        //sayfayi en alta getirir

        cy.wait(2000);
        cy.scrollTo('500px');
        //500px asagi

        cy.wait(2000);
        cy.scrollTo('-500px');
        //500px yukari

        cy.wait(2000);
        cy.scrollTo('0,25%');
        cy.scrollTo('0,25%');
        // %25 asagi

        
    })
})