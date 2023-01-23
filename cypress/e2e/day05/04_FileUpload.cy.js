/// <reference types="cypress"/>
describe('FIle Upload',()=>{
    const path1='Adsızaa.png';
    const path2='Githubs.jfif';
    const path3='manzara.png';
    beforeEach(()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    })
    /* 
    1)
Adress    
    https://www.npmjs.com/package/cypress-file-upload
    2)
Terminalde 
    npm install --save-dev cypress-file-upload
    3)
    import 'cypress-file-upload';


    */
    
    it('Single File upload',()=>{
cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
const path1='Adsızaa.png';
//Yukarida dosya yolu yazarken direkt olarak sadece ismini aldik
// cunku attachFile() direkt olarak fixture file a bakar zaten
cy.get('#filesToUpload').attachFile(path1);
cy.get('#fileList > li').should('include.text','Adsızaa.png');
cy.get('#fileList > li').should('have.text','Adsızaa.png');


    })
      
    it.only('Multiple file upload',()=>{
        
        
        //Yukarida dosya yolu yazarken direkt olarak sadece ismini aldik
        // cunku attachFile() direkt olarak fixture file a bakar zaten
        cy.get('#filesToUpload').attachFile(path1).attachFile(path2).attachFile(path3);


    })


    it('Multiple ',()=>{

       
        cy.get('#filesToUpload').attachFile([path1,path2,path3])

        cy.get('#fileList > li').should('have.text','Adsızaa.pngGithubs.jfifmanzara.png');
        cy.get('#fileList > li').should('contains.text','Adsızaa.pngGithubs.jfifmanzara.png');
        cy.get('#fileList > li').should('include.text','Adsızaa.pngGithubs.jfifmanzara.png');
    })

    it('Override File Name',()=>{
              

        cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'nameless.png'})
        //Yukarda gonderecegimiz dosyanin adini degistirerek gonderdik


    })

})