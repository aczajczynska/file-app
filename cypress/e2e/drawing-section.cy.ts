/// <reference types="cypress" />
import { url } from '../support/url';


describe('Q&A section', () => {
    beforeEach(() => {
      cy.visit(url)
    })
  
    it('displays correct drawing section header', () => {
      cy.get('[data-testid="drawing-header-text"]')
      .should('be.visible')
      .contains('Dawing section')
    })

  })
