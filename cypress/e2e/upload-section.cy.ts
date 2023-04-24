/// <reference types="cypress" />
import {url} from '../support/url';

describe('Upload section', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  it('display correct Upload Section header', () => {
    cy.get('[data-testid="upload-section-header"]')
    .should('be.visible')
    .contains('Drag and Drop File to Upload')
  })
})