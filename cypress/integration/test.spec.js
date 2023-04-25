describe('Website', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:5173')
        cy.get('body').should('be.visible')
        cy.contains('Student').should('be.visible').click()
        cy.contains('University').should('be.visible')
        cy.get('select').select('Lavinia Ciuca') 
        cy.contains('Profile Student').click() // Click on the "Profile Student" button
        cy.wait(1000)
        cy.contains('age: 24').should('be.visible') // check if age is displayed
       
    })
})
