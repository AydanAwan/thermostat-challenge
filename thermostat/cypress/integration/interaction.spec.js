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
        it('power saving button turns on power saving mode', function(){
            
        })
})