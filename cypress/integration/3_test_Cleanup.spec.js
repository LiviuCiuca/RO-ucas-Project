describe('Website', () => {
    //the goal:
    // the uni_flow test creates uni updates it creates 2 courses , updates one, deletes the other
    // then the student flow will create a student , updates it , applies to the created course from the previous test, and checks if its been enrolled
    // this test file will continue on the previous tests,
    // will accept the enrolled student to the course and after will delete the uni that will cascade into deleting the course , deleting the enrollment , then will delete the created student 

    //all tests should pass 
    it('loads successfully', () => {
        cy.visit('http://localhost:5173')
        cy.get('body').should('be.visible')
    })

    it('Navbar visible', () => {
        cy.contains('Student').should('be.visible')
        cy.contains('University').should('be.visible').click()
    })

    it('Select Created Uni', () => {
        cy.get('select').select('Cypress Test University')
        cy.contains('Profile University').click() // Click on the "Profile University" button
    })

    it('Loads selected Uni', () => {
        cy.wait(100)
        cy.contains('name: Cypress Test University').should('be.visible') // check if age is displayed
    })


    it('Navigate to My Courses and select course', () => {
        cy.contains('My Courses').click() // Click on the "My Courses" button
         //selects course
         cy.contains('Cypress Test Course').should('be.visible').click()
    })

    
    it('View the enrolled students', () => {
        cy.contains('My Students').click() // Click on the "My Students" button
        cy.contains('Enrollment').should('be.visible') // Check if we're on the right page
    })

    it('Accept/reject Students application', () => {
        cy.contains('Accept').click().first() // Click on the "Accept" button
        cy.contains('Accept').click().first()

        cy.wait(500)
        cy.contains('Accepted').should('be.visible') // Check if the "Accept" button is gone
    })

    it('Navigate Back from my students to the university profile', () => {
        cy.contains('Back').click()
        cy.wait(100)
        cy.contains('Back').click()
        cy.contains('University').should('be.visible') // Check if we're back to the previous screen
    })

    it('Delete university', () => {
        cy.contains('Delete').click()
       
        cy.contains('Universities').should('be.visible')
    })

    //now ill delete created student by cypress

    it('Navbar visible', () => {
        cy.contains('Student').should('be.visible').click()
        cy.contains('University').should('be.visible')
    })

    it('Select Student', () => {
        cy.get('select').select('Test Cypress')
        cy.contains('Profile Student').click() // Click on the "Profile Student" button
    })
    
    it('Loads selected Student', () => {
        cy.wait(100)
        cy.contains('age: 24').should('be.visible') // check if age is displayed
    })

    it('Delete student', () => {
        cy.contains('Delete').click()
       
        cy.contains('Students Login').should('be.visible')
    })
    
   

})