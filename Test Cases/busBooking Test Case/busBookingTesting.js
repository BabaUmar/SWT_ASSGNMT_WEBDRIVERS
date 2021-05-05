/// <reference types="cypress" />


context("Bus booking form validation",()=>{

    beforeEach(() => {
              cy.visit('http://localhost:90/myWebFolders/bus%20booking/');
            });


            describe("Positive scenario",()=>{
                it.only("Sucessful submission of form for one trip travellers",()=>{
                  
                    cy.get('#fName').type("Umar");
                    cy.get('#date').type("2021-05-05");
                    cy.get('#one-way').click();
                    cy.get('#no-of-people').type(6);
                    cy.get('textarea').type("Trip to Kumasi")
                    cy.get('#btn-submit').click();
                })
              

                it.only("Sucessful submission of form for round trip travellers",()=>{
                  
                    cy.get('#fName').type("Umar");
                    cy.get('#date').type("2021-05-05");
                    cy.get('#round-Trip').click();
                    cy.get('#no-of-people').type(6);
                    cy.get('textarea').type("Trip to Kumasi")
                    cy.get('#btn-submit').click();
                })
            });

            it.only("Should not submit when name field is empty", ()=>{
                // cy.get('#fName').type("Umar");
                    cy.get('#date').type("2021-05-05");
                    cy.get('#round-Trip').click();
                    cy.get('#no-of-people').type(6);
                    cy.get('textarea').type("Trip to Kumasi")
                    cy.get('#btn-submit').click();
              
              });

            //   it.only("Name border color should be red", ()=>{
            //     // cy.get('#fName').type("Umar");
            //         cy.get('#date').type("2021-05-05");
            //         cy.get('#round-Trip').click();
            //         cy.get('#no-of-people').type(6);
            //         cy.get('textarea').type("Trip to Kumasi")
            //         cy.get('#btn-submit').click();
            //         cy.get('fname').should('have.css', 'borderColor')
            //         .and('eq', 'red')
                   
              
            //   });

              it.only("Alert should be shown to the user", ()=>{
                // cy.get('#fName').type("Umar");
                    cy.get('#date').type("2021-05-05");
                    cy.get('#round-Trip').click();
                    cy.get('#no-of-people').type(6);
                    cy.get('textarea').type("Trip to Kumasi")
                    cy.get('#btn-submit').click();
                    cy.on('window:alert',(txt)=>{
                        expect(txt).to.contains('Form submitted');
                     });   
                   
              
              });

              it.only("Should not submit when date is not selected", ()=>{
                    cy.get('#fName').type("Umar");
                    cy.get('#round-Trip').click();
                    cy.get('#no-of-people').type(6);
                    cy.get('textarea').type("Trip to Kumasi")
                    cy.get('#btn-submit').click();
              });

              it.only("Should not submit when trip type is not selected is not selected", ()=>{
                cy.get('#fName').type("Umar");
                cy.get('#date').type("2021-05-05");
         
                cy.get('#no-of-people').type(6);
                cy.get('textarea').type("Trip to Kumasi")
                cy.get('#btn-submit').click();
          });

          
          it.only("Should not submit when No of people is empty", ()=>{
            cy.get('#fName').type("Umar");
            cy.get('#date').type("2021-05-05");
            cy.get('#no-of-people').type(6);
            cy.get('textarea').type("Trip to Kumasi")
            cy.get('#btn-submit').click();
      });

      it.only("Should not submit when textarea is empty", ()=>{
        cy.get('#fName').type("Umar");
        cy.get('#date').type("2021-05-05");
        cy.get('#no-of-people').type(6);
        // cy.get('textarea').type("Trip to Kumasi");
        cy.get('#btn-submit').click();


  });

  it.only("Should not submit when only textarea is filled", ()=>{
    // cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    // cy.get('#no-of-people').type(6);
    cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();



});


it("Should not submit when only Noof people is typed", ()=>{
    // cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();



});


it("Should not submit when only No of people is typed", ()=>{
    // cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();



});


it("Should not submit when only date is filled", ()=>{
    // cy.get('#fName').type("Umar");
    cy.get('#date').type("2021-05-05");
    // cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();

});


it("Should not submit when only date and No of people is filled  ", ()=>{
    // cy.get('#fName').type("Umar");
    cy.get('#date').type("2021-05-05");
    cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();

});


it("Should not submit when only name and No of people is filled  ", ()=>{
    cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();

});


it("Should not submit when only date and name is filled  ", ()=>{
    cy.get('#fName').type("Umar");
    cy.get('#date').type("2021-05-05");
    // cy.get('#no-of-people').type(6);
    // cy.get('textarea').type("Trip to Kumasi");
    cy.get('#btn-submit').click();

});


it("Should not submit when only date and comment is filled  ", ()=>{
    // cy.get('#fName').type("Umar");
    cy.get('#date').type("2021-05-05");
    // cy.get('#no-of-people').type(6);
    cy.get('textarea').type("Travelling back to Kumasi");
    cy.get('#btn-submit').click();

});




it("Should not submit when only name and comment is filled  ", ()=>{
    cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    // cy.get('#no-of-people').type(6);
    cy.get('textarea').type("Travelling back to Kumasi");
    cy.get('#btn-submit').click();

});


it("Should not submit when only no of people and comment is filled  ", ()=>{
    // cy.get('#fName').type("Umar");
    // cy.get('#date').type("2021-05-05");
    cy.get('#no-of-people').type(6);
    cy.get('textarea').type("Travelling back to Kumasi");
    cy.get('#btn-submit').click();

});





             




})


/// <reference types="cypress" />


// describe("busTicketForm", () => {

//     beforeEach(() => {
//         cy.viewport(1366, 768)
//         cy.visit("http://localhost/Cypress-Testing/BusTicketingForm");
//     })

//     // Positive Values
//     it("Fill form with one way trip", () => {
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=one]').click()
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=passengers]').type(5)
//         cy.get('[data-testid=comment]').type('We will like to make a stop at Canada, to pick up some Laptops.')
//         cy.get('[data-testid=submit]').click()
//     })
//     it("Fill form with round way trip", () => {
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=round]').click()
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=passengers]').type(5)
//         cy.get('[data-testid=comment]').type('We will like to make a stop at Canada, to pick up some Laptops.')
//         cy.get('[data-testid=submit]').click()
//     })

//     it("submit empty fields", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=submit]').click()
//         cy.contains("UserName is required")
//         cy.contains("Select A Trip Type")
//         cy.contains("Invalid Input in Passengers");
//     })
//     it("submit fields one after the other (one trip)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=one]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=passengers]').type(5)
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=comment]').type('We will like to make a stop at Canada, to pick up some Laptops.')
//         cy.get('[data-testid=submit]').click()
//     })
//     it("submit fields one after the other (round trip)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=round]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=passengers]').type(5)
//         cy.get('[data-testid=submit]').click()
//         cy.get('[data-testid=comment]').type('We will like to make a stop at Canada, to pick up some Laptops.')
//         cy.get('[data-testid=submit]').click()
//     })

//     it("username field test", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=submit]').click()
//         cy.contains("Select A Trip Type")
//         cy.contains("Invalid Input in Passengers")
//         cy.contains("Enter Valid Date")
//     })
    
//     it("select trip field test (One Way)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=one]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.contains("UserName is required")
//         cy.contains("Invalid Input in Passengers")
//         cy.contains("Enter Valid Date")
//     })
//     it("select trip field test (Round Trip)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=round]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.contains("UserName is required")
//         cy.contains("Invalid Input in Passengers")
//         cy.contains("Enter Valid Date")
//     })
//     it("select date field (valid date) ", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=date]').type('2021-07-03')
//         cy.get('[data-testid=submit]').click()
//         cy.contains("UserName is required")
//         cy.contains("Select A Trip Type")
//         cy.contains("Invalid Input in Passengers")
        
//     })
//     it("select date field (invalid date) ", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=date]').type('2021-03-03')
//         cy.get('[data-testid=submit]').click()
        
//     })
//     it("Number of passengers  field (valid)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=passengers]').type(10)
//         cy.get('[data-testid=submit]').click()
//         cy.contains("UserName is required")
//         cy.contains("Enter Valid Date")
//         cy.contains("Select A Trip Type")
//     })
//     it("Number of passengers  field (lower than 1)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=passengers]').type(-1)
//         cy.get('[data-testid=submit]').click()
 
//     })
//     it("Number of passengers  field (greater than 24)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=passengers]').type(25)
//         cy.get('[data-testid=submit]').click()
 
//     })
//     it("username and trip type (round)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=round]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.contains("Enter Valid Date")
//         cy.contains("Invalid Input in Passengers")
//     })
//     it("username and trip type (one)", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=one]').click()
//         cy.get('[data-testid=submit]').click()
//         cy.contains("Enter Valid Date")
//         cy.contains("Invalid Input in Passengers")
//     })
//     it("username and date", ()=>{
//         cy.url().should('include', 'BusTicketingForm')
//         cy.get('[data-testid=username]').type("UmarBunyaminu")
//         cy.get('[data-testid=date]').type('2021-06-03')
//         cy.get('[data-testid=submit]').click()
//         cy.contains("Invalid Input in Passengers")
//         cy.contains("Select A Trip Type")
//     })

// })

