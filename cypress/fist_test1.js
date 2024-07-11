// cypress/integration/google_search.spec.js

describe('Google Search', () => {
    it('should visit Google and perform a search', () => {
      // Visit Google
      cy.visit('https://www.google.com/');
  
      // Perform a search
      cy.get('input[name="q"]').type('Cypress testing{enter}');
  
      // Assertions (optional)
      cy.contains('Cypress - JavaScript End to End Testing Framework').should('be.visible');
    });