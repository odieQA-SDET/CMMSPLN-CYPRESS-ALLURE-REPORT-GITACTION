describe('Login Functionality', () => {
 
  it('Should log in successfully with valid credentials', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('green')
    cy.get('button[type="button"]').click()
    cy.get('input[name="password"]',{ setTimeout: 8000 }).type('Password!123')
    cy.get('button[type="submit"]').click()
    cy.url().should('not.include', 'login') // Verify successful navigation
  })

  it('Should display error for invalid Password credentials', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('green')
    cy.get('button[type="button"]').click()
    cy.get('input[name="password"]',{ setTimeout: 10000 }).type('invalidPass')
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    cy.get('div[role="alert"]').contains('Error!signin: invalid username or password').should('be.visible') // Verify error message
  })

  it('Should display error for invalid User credentials', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('invalidUser')
    cy.get('button[type="button"]').click()
    cy.get('input[name="password"]',{ setTimeout: 10000 }).type('Password!123')
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    cy.contains('Error!signin: invalid username / email or password').should('be.visible') // Verify error message
  })
  
  it('Should display error for invalid User & Password credentials', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type('invalidUser')
    cy.get('button[type="button"]').click()
    cy.get('input[name="password"]',{ setTimeout: 10000 }).type('Pass')
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    cy.contains('Error!signin: invalid username / email or password').should('be.visible') // Verify error message
  })

  it('Should handle "Forgot Password" workflow', () => {
    cy.visit('/')
    cy.contains('Forgot password').click()
    cy.get('input[name="email"]').type('test@example.com')
    cy.contains('Send').click()
    cy.get('svg[stroke="currentColor"]').should('be.visible') // Verify error message
    cy.wait(500)
    cy.xpath('//button[contains(text(),"Cancel")]').click()
  })
})
