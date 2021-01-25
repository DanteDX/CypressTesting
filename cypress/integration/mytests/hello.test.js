/// <reference types="cypress" />

const name = "Shadman Martin Piyal";

describe("First set of Tests", () => {
  before(() =>{
  	cy.then(() =>{
  		window.localStorage.setItem('token',name);
  		console.log(window.localStorage.getItem('token'));
  	});
  });

  beforeEach(() =>{
  	// cy.viewport('iphone-x');
  	cy.visit("http://127.0.0.1:5500/index.html");
  })

  it("testing clicking", function () {
    cy.contains("First Name").should("exist");
    cy.get('[data-testid=btn]').should("exist").click();
    cy.get('[data-testid=btn]').should('have.text','Alert');
  });

  it.only("checking urls",function(){
  	cy.get('[data-testid=firstName]').should('exist');
  	cy.get('[data-testid=middleName]').should('exist');
  	cy.get('[data-testid=lastName]').should('exist');
  	cy.log('input fields checking done');
  	cy.contains('Shadman Martin Piyal').should('not.exist');
  	cy.pause();
  	cy.get('[data-testid=firstName]').type('Shadman');
  	cy.get('[data-testid=middleName]').type('Martin');
  	cy.get('[data-testid=lastName]').type('Piyal{enter}');
  	// cy.get('[data-testid=submit').rightclick();
  	cy.contains('Shadman').should('exist');
  	cy.contains('Martin').should('exist');
  	cy.contains('Piyal').should('exist');
  	cy.log('checking urls tests all success properly');
  });
});

