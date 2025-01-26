// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
require('cypress-xpath');
// Cypress.Commands.add('login', () => {
//     cy.visit('https://cmms.dev.aegislabs.work/#/page/assets/meters-&-groups');
//     cy.get('input[name="username"]').type('green');
//     cy.get('input[name="password"]').type('Password!123');
//     cy.get('button[type="submit"]').click();
//   });
  