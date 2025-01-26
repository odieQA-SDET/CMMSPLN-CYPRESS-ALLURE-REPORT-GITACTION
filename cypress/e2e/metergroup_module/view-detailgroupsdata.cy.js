describe('Meters Module - View Detail Data Of Meter Groups List and Page Count', () => {
    it('Should log in successfully and view all Groups data list', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('green')  //Login successfully
        cy.get('input[name="password"]').type('Password!123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/page/dashboard')   //Dashboard Visible successfully
        cy.get('.breadcrumb-item').scrollIntoView({ duration: 1000}).should('be.visible')
        cy.get(':nth-child(2) > .nav-item').click()   //Select Navbar Asset Module Menu
        cy.xpath('//*[@id="root"]/div/div[2]/ul/div[2]/a[5]/p').click()  //Select Meters & Groups Sub-Menu of Asset Menu
        cy.xpath('//div[@class="px-3 py-2 hover:bg-info-main hover:text-neutral-white"][normalize-space()="List Meter Groups"]').click({force: true}) //Group All Data List
        cy.get('.overflow-visible > .flex-col').scrollIntoView({ duration: 2000 }) //View All Meter Groups Data List
        cy.get('.self-end > .border').select('25')  // Select 25 Items per page
        cy.get('.self-end > .border').should('have.value', "25")
        cy.scrollTo('bottom', { duration: 2000 })
        cy.get('.self-end > .border').select('10')  // Select 10 Items per page
        cy.get('.self-end > .border').should('have.value', "10")
        cy.scrollTo('bottom', { duration: 2000 })
        cy.get('.inline-flex > :nth-child(3) > .flex').click() //Select Pages 2
        cy.scrollTo('bottom', { duration: 2000 })  
        cy.get('.divide-y-2 > :nth-child(1) > :nth-child(1)', { duration: 2000 }).click()  //View Data Detail 
        cy.wait(600)
        cy.xpath('//body/div[@id="root"]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]').click()
        cy.scrollTo('bottom', { duration: 2000 })
        cy.xpath('//span[contains(text(),"AUTOSCRVARBINDTYPE")]').scrollIntoView().should('be.visible')
    })
  })