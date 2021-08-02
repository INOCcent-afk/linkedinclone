/// <reference types="cypress" />

describe("App renders home page correctly", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render courses", () => {
    cy.get("[data-test='testCourses']").contains("Today's top courses");
  });
});
