import {registrationdata as data} from '../fixtures/registrationdata.data'

context('Validation of sign up form', () => {
    beforeEach(() => {
        cy.visit('/index.html')
    }) 

   
    const {name,email,password,invalidemail, invalidPassword} = data

    //Positive scenario 
    describe("Positive scenario",()=>{
        it("should Sucessfully submit form for Admins with all required fields filled",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click()
            //assertion
            cy.get('.check').should('be.visible')
        })

        it("should sign up a customer after filling all fields",()=>{
            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#type').select("Customer");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click()
            cy.get('.check').should('be.visible')
        })
    });


     //negative scenario 
    describe("Negative Scenarios", ()=>{ 
        it("customer should not be able to submit form when all fields are left empty",()=>{
            cy.get('#btn-submit').click();
            cy.get('.name-container').should('be.visible')
        });
        
        it("customer should not be able to submit form when the name field is empty",()=>{
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click();
            cy.get('.name-container').should('be.visible')
        })

        it("customer should not be able to submit form when the email field is empty",()=>{
            cy.get('#name').type(name);
            cy.get('#type').select("Admin");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click();
            cy.get('.email-container').should('be.visible')
        })

        it("should create a new account with the default account type",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get("#pass").should('have.attr','type','password')
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click();
            cy.get('.check').should('be.visible')
        })

        it("Should not submit form when password field is empty",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#btn-submit').click();
            cy.get('.pass-container').should('be.visible')
        })

        it("Password should show when toggled ",()=>{
            cy.get('#pass').type(password);
            cy.get('#togglePassword').click({force: true});
            cy.get("#pass").should('have.attr','type','text')
            retries:2
            // cy.wait(2000)
        })

        it("Password should hide when the eye icon is clicked",()=>{
            cy.get('#togglePassword').click({force: true});
            cy.get('#pass').type(password);
            // cy.wait(3000);
            cy.get('#togglePassword').click({force: true});
            cy.get("#pass").should('have.attr','type','password');
        });

        it("Should not submit form when an invalid email is entered",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(invalidemail)
            cy.get('#type').select("Admin");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click();  
        });

        it("Should show an error message when a wrong email is inserted",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(invalidemail)
            cy.get('#type').select("Admin");
            cy.get('#pass').type(password);
            cy.get('#btn-submit').click();  
            cy.get('.email-container > .hidden').should("have.text","Enter a valid email");
        });

        it("Password should contain an error message",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type(invalidPassword);
            cy.get('#btn-submit').click();  
            cy.get('.pass-container').contains("6-12");
        });

          //email requirements
          it("The password must be at least 6 characters long",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/er1");
            cy.get('#btn-submit').click();  
        });

        it("Should submit when password characters is is between 6-12",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1lll1");
            cy.get('#btn-submit').click();  
        });

        it("Should fail to submit when password is less than 6 characters",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1");
            cy.get('#btn-submit').click();  
        });

        it("Should fail to submit when password is greater than 12 characters",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1lll12eve");
            cy.get('#btn-submit').click();  
        });

        it("Should fail to submit when password does not contain at least one capital letter ",()=>{
            cy.get('#name').type(name);
            cy.get('#email').type(email)
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qy/e1lll12eve");
            cy.get('#btn-submit').click(); 
            cy.get('.pass-container').should('be.visible')
            cy.get('#pass').should('have.css', 'border-color','rgb(255, 0, 0)')
            cy.screenshot();
        });
    });

})

