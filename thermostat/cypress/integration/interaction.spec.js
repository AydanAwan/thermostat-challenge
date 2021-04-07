describe('thermostst interactions', function(){
    beforeEach(function(){
        cy.visit('../../index.html')
    })
    it('shows 20 when I click the up button', function(){
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

})