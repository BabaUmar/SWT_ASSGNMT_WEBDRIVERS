/// <reference types="cypress" />


context("WebDriveruniversity site click",()=>{

    beforeEach(() => {
              cy.visit('http://www.webdriveruniversity.com/Click-Buttons/index.html');
            });

          
           it("WebDriveruniversity Buttom clicks",()=>{
            cy.get('#button1').click();
            cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
           })

           it("WebDriveruniversity Buttom clicks",()=>{
    
            cy.get('#button2').click();
           
           })

           it("WebDriveruniversity Buttom clicks",()=>{
            cy.get('#button3').click();
            cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
           })

             




})

