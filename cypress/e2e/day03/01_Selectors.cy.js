/// <reference types="cypress"/>
describe('Selector Examples',()=>{
    
    it('Css Selectors',()=>{
    cy.visit('https://amazon.com/')

    //1 By Tag Name
    cy.get('input');

    //2) By Id
    cy.get('#twotabsearchtextbox')

    //3) Class
    cy.get('.nav-search-field ');


    //4) By Attribute Name and Value
    cy.get('input[name="field-keywords"]');

    //5) By Two Attribute
    cy.get('[type="text"][name="field-keywords"]');


    })
      
    it.only('XPath',()=>{
        cy.visit('https://google.com');
        //6) By XPath
        cy.xpath('//a[@class="gb_m"]').should('include.text','Gmail');
        // XPath i algilamadiysa sayfanin en ust kismini bu sekilde degistirebiliriz (1.satir)
        // /// <reference types="cypress-xpath"/>

        // require('@cypress/xpath');
        // Yukaridaki kodu e2e.cy.js dosyasina ekleyecegiz

       // cy.xpath('//a[@class="gb_m"]').click({ multiple: true });
       //ust satirdaki sekilde sikinti aldik

    })


})