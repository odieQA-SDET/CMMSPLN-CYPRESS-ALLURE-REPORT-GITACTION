describe('Meters Module - Delete Meter Data Per Item', () => {
    it('Should log in successfully and Delete Meter Data Per Item in meter data list', () => {
        cy.visit('/')
        cy.get('input[name="username"]').type('green')  //Login successfully
        cy.get('input[name="password"]').type('Password!123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/page/dashboard')   //Dashboard Visible successfully
        cy.xpath('//li[contains(text(),"Dashboard")]',{ setTimeout: 1500 }).should('be.visible')  //Dashboard
        cy.get(':nth-child(2) > .nav-item',{ setTimeout: 1500 }).click()   //Select Navbar Asset Module Menu
        cy.xpath('//*[@id="root"]/div/div[2]/ul/div[2]/a[5]/p',{ setTimeout: 3000 }).click()  //Select Menus & Groups Sub-Menu of Asset Menu
        cy.get('.overflow-visible > .flex-col').scrollIntoView({ duration: 2000 }) //View All Menus & Groups Data List   
        cy.scrollTo('top')
        cy.get('.btn.btn-primary.dropdown-toggle').click()
        cy.wait(500)
        cy.get('#btn-action-Meter-2').click() //Delete Data
        cy.get('.modal-title').should('be.visible').title('Delete Meter')
        cy.xpath('//body/div[3]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]').click()
        cy.xpath('//div[contains(text(),"Meter Baru Ahmad")]').click()   
        cy.xpath('//button[contains(text(),"Delete")]').click() //Submit Button for Delete Data Meter
        cy.get('#swal2-html-container').should('be.visible').title('Do you want to delete Meter Baru Ahmad?')
        cy.wait(600)
        cy.xpath('//button[contains(text(),"Cancel")]').click() //Cancel Delete
        cy.wait(800)
        cy.xpath('//body/div[3]/div[1]/div[1]/form[1]/div[3]/button[2]').click() //Close Button for Cancel Delete Data          
    })
  })