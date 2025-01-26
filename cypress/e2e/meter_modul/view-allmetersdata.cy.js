describe('Meters Module - View All Data Meters List and Page Count', () => {
    it('Should log in successfully and view all meter data list', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('green')  //Login successfully
        cy.get('input[name="password"]').type('Password!123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/page/dashboard')   //Dashboard Visible successfully
        cy.get('.breadcrumb-item').scrollIntoView({ duration: 2000}).should('be.visible')
        cy.get(':nth-child(2) > .nav-item').click()   //Select Navbar Asset Module Menu
        cy.xpath('//*[@id="root"]/div/div[2]/ul/div[2]/a[5]/p').click()  //Select Menus & Groups Sub-Menu of Asset Menu
        cy.get('.overflow-visible > .flex-col').scrollIntoView({ duration: 2000 }) //View All Menus & Groups Data List
        cy.get('.self-end > .border').select('50')  // Select 50 Items per page
        cy.get('.self-end > .border').should('have.value', "50")
        cy.scrollTo('bottom', { duration: 2000 })
        cy.get('.inline-flex > :nth-child(3) > .flex').click() //Select Pages 2
        cy.scrollTo('bottom', { duration: 2000 })              
    })
  })