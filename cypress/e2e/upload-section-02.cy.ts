/// <reference types="cypress" />
import { url } from '../support/url';

export const clickButtonAndDragAndDropFile = () => {
  const filepath = 'cypress/fixtures/images/toTest.png'
  cy.get('[data-testid="file-input"]').should('be.visible').click()
  cy.get('input[type=file]').selectFile(filepath, { action: 'drag-drop' })
  cy.get('[data-testid="files-display-container"]').contains("toTest.png")
};

describe('Upload section with Upload button Drag and Drop', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  it('displays correct Upload Section header', () => {
    cy.get('[data-testid="upload-section-header"]')
    .should('be.visible')
    .contains('Drag and Drop File to Upload')
  })

  it('displays the selected file in the files display container with drag and drop', () => {
    clickButtonAndDragAndDropFile()
  })

  it('remove file using X button', () => {
    clickButtonAndDragAndDropFile()
    cy.get('[data-testid="remove-file-button"]').click()
    cy.get('[data-testid="files-display-container"]').contains("toTest.png").should('not.exist')
  })

  it('show file (image) in modal then close it', () => {
    clickButtonAndDragAndDropFile()
    cy.get('[data-testid="file"]').click()
    cy.get('[data-testid="files-display-container"]').contains("toTest.png").should('exist')
    cy.get('[data-testid="image-modal"]').should('be.visible')
    cy.get('[data-testid="image-modal"]').children('span').click()
  })

  it('successful upload file', () => {
    clickButtonAndDragAndDropFile()
    cy.get('button').contains('Upload').click()
    cy.get('[data-testid="files-display-container"]', {timeout: 110000}).contains("toTest.png").should('not.exist')
  })

  it('show modal with table and files', () => {
    clickButtonAndDragAndDropFile()
    cy.get('button').contains('Save and show').click()
    cy.get('[data-testid="files-display-container"]').contains("toTest.png").should('exist')
    cy.get('[data-testid="table-file-modal"]').contains("toTest.png").should('be.visible')
  })
})

