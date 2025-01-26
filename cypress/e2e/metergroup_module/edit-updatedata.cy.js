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
        cy.scrollTo('top', { duration: 2000 })
        cy.xpath('//tbody/tr[1]/td[1]').click()  //View Data Detail Null
        cy.wait(2500)      
        cy.xpath('//div[@class="px-3 py-2 hover:bg-info-main hover:text-neutral-white"][normalize-space()="List Meter Groups"]').click({force: true}) //Group All Data List
        cy.get('.overflow-visible > .flex-col').scrollIntoView({ duration: 2000 }) //View All Meter Groups Data List
        cy.xpath('//td[normalize-space()="MG AHMAD Ceria"]',{ duration: 10000 }).click() //View Data Detail
        cy.get('div[id="row-0"] button[aria-label="Expand Row"]').click()
        cy.get('div[id="row-1"] button[aria-label="Expand Row"]').click()
        cy.scrollTo('bottom', { duration: 2000 })
        cy.xpath('//span[contains(text(),"DMCOLLVALIDRESULT")]').scrollIntoView().should('be.visible')
        cy.scrollTo('top', { duration: 1000 })
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.wait(500)
        cy.get('button[id="btn-action-Meter Group-1"]').click() //edit-update Data 
        cy.get('input[placeholder="Enter Meter Group"]').click().clear().type('MG AHMAD Ceria') //Enter Meter Name
        cy.get('input[placeholder="Enter Meter Group Description"]').click().clear().type('UPDATE-TESTING Ahmad CERIA YA') //Enter Meter Description
        cy.get('button[type="submit"]').click() //Submit Button for Edit/Update Data
        cy.get('#swal2-title').should('be.visible').title('Are you sure? you want to submit?').title({ duration: 2000 })
        cy.wait(500)
        cy.xpath('//button[normalize-space()="Yes! Confirm"]').click() //Confirm Button for Data Creation Successfully
        cy.get('#swal2-title').should('be.visible').title('Success! Meter Group updated successfully.').title({ duration: 2000 })
        cy.wait(500)
        cy.xpath('//button[normalize-space()="OK"]').click()
        //cy.get('button[class="swal2-cancel swal2-styled"]', { duration: 5000 }).click()
       
    })
  })