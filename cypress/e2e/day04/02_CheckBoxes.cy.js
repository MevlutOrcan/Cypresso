/// <reference types="cypress"/>
describe('Check Boxes',()=>{
    
    it('Single Check Box',()=>{
        cy.visit('https://www.sahibinden.com/bentley')

        
        cy.get('dd div li .js-attribute.facetedCheckbox i').first().click();
        // .first()  = .eq(0);

        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(1).click();
        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(4).click({force: true});
       // cy.get('dd div li .js-attribute.facetedCheckbox i').last().scrollIntoView();
        cy.get('dd div li .js-attribute.facetedCheckbox i').last().click({force: true});
        cy.wait(3000);
        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(4).should('not.be.checked');
        cy.get('dd div li .js-attribute.facetedCheckbox i').last().should('not.be.checked');

        cy.get('#searchResultLeft-a6 > dl > .collapseContent > .facetedSearchList > .jspContainer > .jspPane > :nth-child(2) > .text-content > .js-attribute > i')
        .check();
        cy.get('#searchResultLeft-a6 > dl > .collapseContent > .facetedSearchList > .jspContainer > .jspPane > :nth-child(2) > .text-content > .js-attribute > i')
        .should('be.checked');

        //first();Birden fazla web elementi varsa birinciyi sec demek
       //burada eq() mantıgı kullanılır eq(0) dersek birinci web elemente tiklayacak ayni index mantigi ile calisir eq(1)
       //dersek gelen web elementlerinden ikincisine tiklar

        //cy.get(locate).first() : methodu aldigimiz locate de birden fazla web element varsa birinciyi sec demek
       //cy.get(locate).eq(index): medhodu aldigimiz locate de birden fazla web element varsa istedigimiz indexteki elementi sec demek


        //cy.get('dd div li').first().click();
       // cy.get('#searchResultLeft-a17 > dl > .collapseContent > .facetedSearchList > .jspContainer > .jspPane > :nth-child(1) > .text-content > .js-attribute > i').click();


    })
      
    it('All CheckBoxes ',()=>{

        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        
        
        cy.get('input[type="checkbox"]').check();
        cy.wait(3000);
        cy.get('input[type="checkbox"]').uncheck();
        // type='checkbox' olmasi sartiyla checkboxlari check ve uncheck komtutyla tikleyip tiki kaldirabiliyoruz
        
            })
        
    it.only('All Checkboxes 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/checkboxes');
                
                
        cy.get('input[type="checkbox"]').eq(0).click({ multiple: true });
        cy.get('input[type="checkbox"]').eq(0).should('have.attr','checked');
         // burasi 'checked' attributune sahip olmali

        cy.get('input[type="checkbox"]').should('have.attr','checked'); 
        // locator u 'input[type="checkbox]' olan tum hepsi 'checked' attributune sahip olmali


        //cy.get('input[type="checkbox"]').eq(0).should('have.class','checked'); 
        // burasi 'checked' class ina sahip olmali
                
                    })
                
    it('All CheckBoxes 2 Amazon', () => {
        cy.visit('https://www.amazon.com')
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click();
        //5. kutuya tikla
        cy.get('input[type="checkbox"]').eq(5).check().should('be.checked');
        //12. kutuya tikla
        cy.get('input[type="checkbox"]').eq(12).check().should('be.checked');
        //23. kutuya tikla
        cy.get('input[type="checkbox"]').eq(23).check().should('be.checked');
        //33. kutuya tikla
        cy.get('input[type="checkbox"]').eq(33).check().should('be.checked');
        //45. kutuya tikla
        cy.get('input[type="checkbox"]').eq(45).check().should('be.checked');

        //Tiklamalari kaldir
        cy.get('input[type="checkbox"]').eq(5).uncheck().should('not.be.checked');
        // unchecked() -->> tiklamalari kaldirir
        // .should('not.be.checked'); tikli olmadigini dogrular
    


       })

                        
})