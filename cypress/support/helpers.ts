export const clickButtonAndFindFile = () => {
    const filepath = 'cypress/fixtures/images/toTest.png'
    cy.get('[data-testid="file-input"]').should('be.visible').click()
    cy.get('input[type="file"]').selectFile(filepath)
    cy.get('[data-testid="files-display-container"]').contains("toTest.png")
  };

export const clickButtonAndDragAndDropFile = () => {
  const filepath = 'cypress/fixtures/images/toTest.png'
  cy.get('[data-testid="file-input"]').should('be.visible').click()
  cy.get('input[type=file]').selectFile(filepath, { action: 'drag-drop' })
  cy.get('[data-testid="files-display-container"]').contains("toTest.png")
  };