describe('Meters Module - View Meter Details and Create New Meter Data', () => {
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
        cy.scrollTo('top')
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.get('#btn-action-Meter-0').click() //Create New Data
        cy.get('input[placeholder="Enter Meter"]').type('Meter Baru Ahmad')
        cy.get('input[placeholder="Enter Meter Description"]').type('Meter testing Ahmad')
        cy.get('.css-lsal45-control > .css-hlgwow > .css-19bb58m').click()
        cy.xpath('//div[@class="css-iibr2f-control"]//div[@class="css-hlgwow"]').type('Characteristic').type('{enter}')
        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[3]/div[1]/div[1]/div[1]').click()
        cy.xpath('//div[contains(text(),"B45")]').click()
        cy.get('button[type="submit"]').click() //Submit Button for New Data Creation
        cy.xpath('//button[normalize-space()="Yes! Confirm"]').click() //Confirm Button for Data Creation Successfully
        cy.get('#swal2-title').should('be.visible').title('Oops...!')

    })
  })