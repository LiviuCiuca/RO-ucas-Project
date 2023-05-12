describe('Website', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:5173')
        cy.get('body').should('be.visible')
    })

    it('Navbar visible', () => {
        cy.contains('Student').should('be.visible').click()
        cy.contains('University').should('be.visible')
    })

   

    it('Create Student', () => {
        cy.contains('Create Student').click()
        cy.wait(1000)

        cy.get('input[name="name"]').type('Test Cypress')
        cy.get('input[name="age"]').type('24')
        cy.get('input[name="address"]').type('123 Main St, Example City')
        cy.get('input[name="phone"]').type('+1 (555) 123-4567')
        cy.get('input[name="email"]').type('test@example.com')
        cy.get('input[name="contactDetails"]').type('Available via phone and email.')
        cy.get('textarea[name="personalStatement"]').type('I am a dedicated and hardworking individual seeking to expand my knowledge in the field of computer science.')
        cy.get('textarea[name="whyTheCourse"]').type('I want to gain expertise in software development and learn about the latest industry trends.')
        cy.get('textarea[name="education"]').type('Bachelor of Computer Science, Example University')
        cy.get('textarea[name="workExperience"]').type('Software Developer at TechCorp')
        cy.get('textarea[name="skills"]').type('Java, Python, JavaScript, Web Development')
        cy.get('textarea[name="interests"]').type('Programming, Hiking, Music')
        cy.get('textarea[name="references"]').type('Prof. You, you@exampleuniversity.com')

        // Click the "Create" button
        cy.contains('Create').click()
        cy.get('button[type="button"]').click();
        cy.wait(100)
        cy.contains('Created').should('be.visible')

    })

    it('Navigate Back from Create', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

    it('Select Student', () => {
        cy.get('select').select('Test Cypress')
        cy.contains('Profile Student').click() // Click on the "Profile Student" button
    })

    
    it('Loads selected Student', () => {
        cy.wait(100)
        cy.contains('24').should('be.visible') // check if age is displayed
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
        cy.contains('Courses')
        cy.wait(1000)

        // Find the div containing the text "name: test"
        cy.contains('div.allCourses', 'name: Cypress Test Course').within(() => {
            // Click the "Apply" button within the found div
            cy.get('button:contains("Apply")').click()
            cy.get('button:contains("Apply")').click()

        })

        // Check if the button text has changed to "Applied"
        cy.contains('div.allCourses', 'name: Cypress Test Course').within(() => {
            cy.get('button:contains("Applied")').should('be.visible')
        })
    })

    it('Navigate Back from courses', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

    it('Navigate to enrollments', () => {
        cy.contains('View Enrollments').click()
        cy.wait(100)
        cy.contains('My Applications').should('be.visible') 
    })

    it('see the just made enrollment', () => {
        cy.contains('Cypress Test Course').should('be.visible')
    })

    it('Navigate Back from enrollments', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Student').should('be.visible') // Check if we're back to the previous screen
    })

})
