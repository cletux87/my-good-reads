/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Render", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
    cy.viewport(1280, 720);
  });

  it("Find the search bar in main page", () => {
    cy.get('[id="searchbarInputSpace"]').should("be.visible");
  });

  it("Find wish list header", () => {
    cy.get('[id="wishListHeader"]').should("be.visible");
  });

  it("Find wish list bar", () => {
    cy.get('[data-cy="wishListBar:responsiveMobile"]').should("not.be.visible");
  });

  it("Find wish list bar", () => {
    cy.get('[data-cy="wishListBar:responsiveDesktop"]').should("be.visible");
  });

  it("Blank page", () => {
    cy.get('[id="bookTableContainer"]').should("not.exist");
  });
});

context("Search", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
    cy.viewport(1280, 720);
  });

  it("Search for books and find elements", () => {
    cy.get('[id="searchbarInputSpace"]').type("Java");
    cy.get('[id="searchbarButton"]').click();
    cy.get('[id="bookTableContainer"]').should("be.visible");
    cy.get('[id="bookElement"]').should("be.visible");
  });
});

context("Wishlist", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
    cy.viewport(1280, 720);
  });
  it("Search for books and add to wishlist", () => {
    cy.get('[id="searchbarInputSpace"]').type("Java");
    cy.get('[id="searchbarButton"]').click();
    cy.get('[data-cy="bookElementIndex:0"]').find('[id="wishButton"]').click();
    cy.get('[data-cy="bookElementIndex:1"]').find('[id="wishButton"]').click();
    cy.get('[id="wishListState"]').as("wishListState");
    cy.get("@wishListState").should("contain", 2);
  });
  it("Search for books and remove from wishlist", () => {
    cy.get('[id="searchbarInputSpace"]').type("Java");
    cy.get('[id="searchbarButton"]').click();
    cy.get('[id="wishListState"]').as("wishListState");
    cy.get("@wishListState").should("contain", 0);
    cy.get('[data-cy="wishListElementIndex:0"]').should("not.exist");
    cy.get('[data-cy="bookElementIndex:0"]').find('[id="wishButton"]').click();
    cy.get('[data-cy="bookElementIndex:1"]').find('[id="wishButton"]').click();
    cy.get('[id="wishListState"]').as("wishListState");
    cy.get("@wishListState").should("contain", 2);
    cy.get('[data-cy="wishListBar:responsiveDesktop"]')
      .find('[data-cy="wishListRemoveButton:0"]')
      .click();
    cy.get('[id="wishListState"]').as("wishListState");
    cy.get("@wishListState").should("contain", 1);
  });
});

context("Pagination", () => {
  beforeEach(() => {
    cy.visit("baseUrl");
    cy.viewport(1280, 720);
  });
  it("Interact with pagination", () => {
    cy.get('[id="searchbarInputSpace"]').type("Java");
    cy.get('[id="searchbarButton"]').click();
    cy.get('[id="paginationIndex:0"]').as("currentPagination");
    cy.get("@currentPagination").should("contain", 1);
    cy.get('[id="forwardPagination"]').click();
    cy.get('[id="paginationIndex:1"]').as("currentPagination");
    cy.get("@currentPagination").should("contain", 2);
    cy.get('[id="backwardPagination"]').click();
    cy.get('[id="paginationIndex:0"]').as("currentPagination");
    cy.get("@currentPagination").should("contain", 1);
  });
});
