describe('Meters Module - Create New Meter Group Data', () => {
    it('Should log in successfully and view all meter data list to create new meter group data', async () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('green')  //Login successfully
        cy.get('input[name="password"]').type('Password!123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/page/dashboard')   //Dashboard Visible successfully
        cy.get('.breadcrumb-item').scrollIntoView({ duration: 1000}).should('be.visible')
        cy.get(':nth-child(2) > .nav-item',{ duration: 2500}).click()   //Select Navbar Asset Module Menu
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
        cy.wait(600)
        cy.scrollTo('top')
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.get('p[class="text-heading-medium "]').scrollIntoView({ duration: 2000}).should('be.visible')
        cy.get('button[id="btn-action-Meter Group-0"]',).click() //Create New Data
        cy.get('input[placeholder="Enter Meter Group"]').type('C-RVV Baru')
        cy.get('input[placeholder="Enter Meter Group Description"]').type('Meter Group testing Ahmad')
        cy.get('button[type="submit"]').click() //Submit Button for New Meter Group Data Creation
        //cy.xpath('//button[normalize-space()="Yes! Confirm"]',{ duration: 2000}).click() //Confirm Button for Data Creation Successfully
        cy.get('#swal2-title').should('be.visible').title('Are you sure?') //Please confirm the data creation to Your Big Bozz! -_- :)

    })
  })