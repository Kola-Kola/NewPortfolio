describe('Menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it ('Should have About me title with MiddleUnderLine component', () => {
    cy.getBySel('A propos de moi').should('exist')
    cy.getBySel('A propos de moi').should('have.css', 'font-size', '25px')

    cy.getBySel('MiddleUnderlineText').should('have.css', 'background-color', 'rgb(213, 197, 200)')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'width', '80px')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'height', '2px')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'margin-top', '5px')
  })

  it ('Should have textContainer below aboutMe section', () => {
    cy.getBySel('firstTextContainer').should('exist')
    cy.getBySel('secondTextContainer').should('exist')
  })

  it ('Should redirect user on my github page', () => {
    cy.getBySel('github')
        .should('have.attr', 'href', 'https://github.com/Kola-Kola')
  })

  it ('Should redirect user on my linkedin page', () => {
    cy.getBySel('linkedin')
        .should('have.attr', 'href', 'https://www.linkedin.com/in/jonathan-ibor-ab4607127/')
  })

  it ('Should have first and second skillSet container', () => {
    cy.getBySel('firstSkillset').should('exist')
    cy.getBySel('secondSkillset').should('exist')
  })

  it ('Should have last article title section', () => {
    cy.getBySel('Les derniers articles').should('exist')
    cy.getBySel('Les derniers articles').should('have.css', 'font-size', '25px')

    cy.getBySel('MiddleUnderlineText').should('have.css', 'background-color', 'rgb(213, 197, 200)')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'width', '80px')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'height', '2px')
    cy.getBySel('MiddleUnderlineText').should('have.css', 'margin-top', '5px')
  })
})
