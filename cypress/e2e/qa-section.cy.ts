/// <reference types="cypress" />
import { url } from '../support/url';


describe('Q&A section', () => {
    beforeEach(() => {
      cy.visit(url)
    })
  
    it('displays correct Q&A Section header', () => {
      cy.get('[data-testid="qa-header-text"]')
      .should('be.visible')
      .contains('Q&A Section')
    })

    it('show correct accordion content', () => {
        cy.get('[data-testid="accordion"]').first().contains('How to save photos?')
        cy.get('[data-testid="accordion"]').last().contains('How to understand women?')
      })

      it('show have 3 children of Cards components', () => {
        cy.get('[data-testid="accordion"]').children().should("have.length", 3)
      })
})