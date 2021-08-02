/// <reference types="cypress" />

context("Login Page", () => {
  beforeEach(() => {
    window.localStorage.clear();
    cy.visit("http://localhost:3000", {
      onBeforeLoad: (win) => {
        win.fetch = null;
      },
    });
  });
});
