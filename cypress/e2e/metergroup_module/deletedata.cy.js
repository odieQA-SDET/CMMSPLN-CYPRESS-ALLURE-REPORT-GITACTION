describe('Meters Module - View Meter Details and Create New Meter Data', () => {
    it('Should log in successfully and view all meter data list', () => {
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
        cy.scrollTo('top',{ duration: 2000 })
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.wait(500)
        cy.get('button[id="btn-action-Meter Group-2"]').click() //Delete Data
        cy.get('.modal-title').should('be.visible').title('Delete Meter Group')
        cy.xpath('//body/div[3]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]').click()
        cy.xpath('//div[contains(text(),"MG AHMAD Ceria")]').click()  
        cy.xpath('//button[contains(text(),"Delete")]').click() //Submit Button for Delete Group Data
        cy.get('#swal2-html-container').should('be.visible').title('Are you sure? Do you want to delete MG AHMAD Ceria?')
        cy.wait(600)
        cy.xpath('//button[contains(text(),"Cancel")]').click() //Cancel Delete
        cy.wait(800)
        cy.xpath('//body/div[3]/div[1]/div[1]/form[1]/div[3]/button[2]').click() //Close Button for Cancel Delete Data          
    })
  })