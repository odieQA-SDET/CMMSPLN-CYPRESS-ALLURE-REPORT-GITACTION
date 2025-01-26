describe('Meters Module - Edit/Update Meter Data Details', () => {
    it('Should log in successfully and Edit/Update Meter Data Details', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('green')  //Login successfully
        cy.get('input[name="password"]').type('Password!123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/page/dashboard')   //Dashboard Visible successfully
        cy.get('.breadcrumb-item').scrollIntoView({ duration: 2000}).should('be.visible')
        cy.get(':nth-child(2) > .nav-item').click()  //Select Navbar Asset Module Menu
        cy.get('.mt-2.font-normal.text-body-small.text-neutral-text-field.text-nowrap',{ duration: 2000 }).should('be.visible').and('exist')
        cy.wait(400)
        cy.xpath('//*[@id="root"]/div/div[2]/ul/div[2]/a[5]/p').click({ duration: 2000 })  //Select Menus & Groups Sub-Menu of Asset Menu
        cy.wait(500)
        cy.get('.overflow-visible > .flex-col').scrollIntoView({ duration: 2000 }) //View All Menus & Groups Data List   
        cy.scrollTo('bottom', { duration: 2000 })
        cy.get('a[aria-label="Page 6"]').click() //Select Pages 6
        cy.scrollTo('bottom', { duration: 2500 })      
        cy.get(':nth-child(10) > :nth-child(1)').click()  //View Data Detail 
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.get('#btn-action-Meter-1').click() //edit-update Data 
        cy.get('input[placeholder="Enter Meter"]').click().clear().type('VIB BR A-J UPDATE AHMAD') //Enter Meter Name
        cy.get('input[placeholder="Enter Meter Description"]').click().clear().type('UPDATE-Meter testing Ahmad') //Enter Meter Description
        cy.get('.css-lsal45-control > .css-hlgwow > .css-19bb58m').click()
        cy.xpath('//div[contains(text(),"Continuous")]').as('text').click()
        cy.get(':nth-child(2) > :nth-child(1) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click()       
        cy.xpath('//div[@class="css-t3ipsp-control"]//div[@class="css-19bb58m"]').click()
        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]').click()
        cy.xpath('//div[contains(text(),"B45")]').click()  
        cy.get('button[type="submit"]').click() //Submit Button for Edit/Update Data
        cy.get('#swal2-title').should('be.visible').title('Are you sure? you want to submit?').title({ length: 10000 })
          // cy.xpath('//button[normalize-space()="Yes! Confirm"]').click() //Confirm Button for Data Creation Successfully
        cy.get('button[class="swal2-cancel swal2-styled"]').click()
        cy.wait(500)
    })
  })