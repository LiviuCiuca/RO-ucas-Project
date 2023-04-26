describe('Website', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:5173')
        cy.get('body').should('be.visible')
    })

    it('Navbar visible', () => {
        cy.contains('Student').should('be.visible')
        cy.contains('University').should('be.visible').click()
    })

    it('Navigate to Create Uni', () => {
        cy.contains('Create University').click() // Click on the "create" button
    })

    it('Create University', () => {
        cy.contains('Create University').click()
        cy.wait(1000)

        // Fill in the form fields
        cy.get('input[name="name"]').type('Cypress Test University')
        cy.get('input[name="location"]').type('123 Main St, Example City')
        cy.get('input[name="email"]').type('info@exampleuniversity.com')
        cy.get('input[name="phone"]').type('+1 (555) 123-4567')
        cy.get('input[name="website"]').type('https://www.Cypress.com')
        cy.get('textarea[name="description"]').type('Example University offers a wide range of courses and has an excellent reputation for its academic and research activities.')
        cy.get('input[name="image"]').type('https://www.Cypress.com/image.jpg')
        cy.get('input[name="rating"]').type('4')

        // Click the "Create" button
        cy.contains('Create').click()
        cy.wait(100)

        // Check if the new university has been created
        cy.contains('University created successfully!').should('be.visible')
    })

    it('Navigate Back from Create University', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Universities').should('be.visible') // Check if we're back to the previous screen
    })

    it('Select Created Uni', () => {
        cy.get('select').select('Cypress Test University')
        cy.contains('Profile University').click() // Click on the "Profile University" button
    })

    it('Loads selected Student', () => {
        cy.wait(100)
        cy.contains('name: Cypress Test University').should('be.visible') // check if age is displayed
    })

})