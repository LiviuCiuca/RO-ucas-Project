describe('Website', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:5173')
        cy.get('body').should('be.visible')
    })

    it('Navbar visible', () => {
        cy.contains('Student').should('be.visible').click()
        cy.contains('University').should('be.visible')
    })

    it('Select Student', () => {
        cy.get('select').select('Lavinia Ciuca')
        cy.contains('Profile Student').click() // Click on the "Profile Student" button
    })
    it('Loads selected Student', () => {
        cy.wait(1000)
        cy.contains('age: 24').should('be.visible') // check if age is displayed
    })

    it('Navigate Update Student,and update email', () => {
        cy.contains('Update Student').click()
        //this clears the textbox and types the new value in 
        cy.get('input[name="email"]')
            .clear()
            .type('LaviniaCypressTestUpdated@email.com')


        cy.contains('Update').click() // Click on the "Update" button
    })

    it('Navigate Back from update', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

    it('Navigate Courses', () => {
        cy.contains('View Courses').click()
        cy.contains('Courses').should('be.visible')
    })

    it('Apply for a course', () => {
        //  clicks on the first last button
        cy.get('button:contains("Apply")').last().click()
        cy.get('button:contains("Apply")').last().click()

        // Check if the button text has changed to "Applied"
        cy.get('button:contains("Applied")').should('be.visible')
    })

    it('Navigate Back from courses', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

    it('Navigate to enrollments', () => {
        cy.contains('View Enrollments').click()
        cy.wait(100)
        cy.contains('Enrollments').should('be.visible') 
    })

    it('see the just made enrollment', () => {
        cy.contains('Environmental Science and Sustainable Development').should('be.visible')
    })

    it('Navigate Back from enrollments', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

})
