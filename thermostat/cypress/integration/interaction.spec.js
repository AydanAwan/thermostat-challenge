describe('thermostst interactions', function(){
    beforeEach(function(){
        cy.visit('../../index.html')
    })
        it('shows 20 on the page by default', function(){
            cy.contains(20)
        })
        it('shows 21 when I click the up button', function(){
            cy.get('#up-button').click()
            cy.contains(21)
        })
        it('shows 22 when I click the up button', function(){
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.contains(22)
        })
        it('shows 19 when I click the down button', function(){
            cy.get('#down-button').click()
            cy.contains(19)
        })
        it('shows 18 when I click the down button', function(){
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.contains(18)
        })
        it('reset button resets the temperature to 20', function(){
            cy.get('#reset-button').click()
            cy.contains(20)
        })
        it('power saving button turns off power saving mode', function(){
            cy.get('#powersaving-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.contains(26)
        })
        it('power saving button on means that temperature remains at 25', function() {
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.contains(25)
        })
        it('Testing power saving button start off green', function() {
            cy.get('#powersaving-button').should('have.css', 'background-color', 'rgb(0, 128, 0)');

        })
        it('Testing power saving button is red when clicked', function() {
            cy.get('#powersaving-button').click()
            cy.get('#powersaving-button').should('have.css', 'background-color', 'rgb(255, 0, 0)');
        })
        it('Testing that the temperature is yellow', function() {
            cy.get('#temperature').should('have.css', 'color', 'rgb(255, 255, 0)');
        })
        it('Testing that the temperature is red when at 25 degrees or above', function() { 
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#up-button').click()
            cy.get('#temperature').click().should('have.css', 'color', 'rgb(255, 0, 0)');
        })
        it('Testing that the temperature is green when at less than 18', function() {
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#down-button').click()
            cy.get('#temperature').click().should('have.css', 'color', 'rgb(0, 128, 0)')
        })
})