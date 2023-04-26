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
        cy.wait(100)

        // Fill in the form fields
        cy.get('input[name="name"]').type('Cypress Test University')
        cy.get('input[name="location"]').type('123 Main St, Example City')
        cy.get('input[name="email"]').type('info@exampleuniversity.com')
        cy.get('input[name="phone"]').type('+1 (555) 123-4567')
        cy.get('input[name="website"]').type('https://www.Cypress.com')
        cy.get('textarea[name="description"]').type('Example University offers a wide range of courses and has an excellent reputation for its academic and research activities.')
        cy.get('input[name="image"]').type('https://www.Cypress.com/image.jpg')
        cy.get('input[name="rating"]').clear().type('4')

        // Click the "Create" button
        cy.contains('Create').click()
        cy.get('button[type="button"]').click();
        cy.wait(1000)

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

    it('Loads selected Uni', () => {
        cy.wait(100)
        cy.contains('name: Cypress Test University').should('be.visible') // check if age is displayed
    })
    it('Navigate to update University', () => {
        cy.contains('Update University').click() // Click on the "update" button
    })

    it('Update University', () => {
        cy.wait(1000)

        cy.get('input[name="email"]').clear().type('cypresUpdateTest@test.com)') // Update the email

        // Click the "Update" button
        cy.contains('Update').click()
        cy.get('button[type="submit"]').click();
        cy.wait(100)
        //checking if uni been uptaded
        cy.contains('Updated').should('be.visible')
    })
    it('Navigate Back from Update University', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('University').should('be.visible') // Check if we're back to the previous screen
    })

    it('Navigate to My Courses', () => {
        //because we have a fresh uni this button will redirect the user to createCourse page
        cy.contains('My Courses').click() // Click on the "My Courses" button
    })

    it('Navigated to Create Course automatically, this test creates a course', () => {
        cy.wait(1000)

        // Fill in the form fields
        cy.get('input[name="name"]').type('Cypress Test Course')
        cy.get('textarea[name="description"]').type('CYPRESS101 bla bla')
        cy.get('input[name="duration"]').type('12')
        cy.get('input[name="price"]').type('9000')


        // Click the "Create" button
        cy.contains('Create').click()
        cy.get('button[type="submit"]').click();
        cy.wait(100)

        // Check if the new course has been created
        cy.contains('Created').should('be.visible')
    })

    it('Navigate Back from Create Course', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('My Courses').should('be.visible') // Check if we're back to the previous screen
    })

    //thid test creates a new course and then deletes it and verifies if it has been deleted
    it('delete course', () => {
        cy.contains('Create Course').click()
        // Fill in the form fields
        cy.get('input[name="name"]').type('Test Delete Course')
        cy.get('textarea[name="description"]').type('CYPRESS101 bla bla')
        cy.get('input[name="duration"]').type('12')
        cy.get('input[name="price"]').type('9000')

        // Click the "Create" button
        cy.contains('Create').click()
        cy.get('button[type="submit"]').click();
        cy.wait(1000)

        // Check if the new course has been created
        cy.contains('Created').should('be.visible')
        cy.contains('Back').click()
        cy.wait(1000)
        
        //this selects course
        cy.contains('Test Delete Course').should('be.visible').click()
        
        //this deletes course
        cy.contains('Delete').click()
        cy.get('button:contains("Delete")').click()
        cy.wait(1000)
        cy.contains('Delete successful.').should('be.visible')
    })

    it('Navigate to Update Course', () => {
        //selects course
        cy.contains('Cypress Test Course').should('be.visible').click()

        cy.contains('Update').click() // Click on the "update" button

        cy.get('textarea[name="description"]').clear().type('cypres Update Test)') // Update the description

        // Click the "Update" button
        cy.contains('Update').click()
        cy.get('button[type="submit"]').click();
        cy.wait(100)
        //checking if course been uptaded
        cy.contains('Updated').should('be.visible')
    })
    it('Navigate Back from Update Course', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('My Courses').should('be.visible') // Check if we're back to the previous screen
    })

})