/// <reference types="Cypress"/>

// describe("Api testing ",()=>{
//     //this specifies the baseurl so that we won't be typing it always
//     Cypress.config("baseUrl", "https://reqres.in");

//     it("Get request",()=>{
//         cy.request('GET','/api/users/page=2').then((reponse)=>{
//                expect(response.body).to.have.property('page');
//         })
//     })

// });