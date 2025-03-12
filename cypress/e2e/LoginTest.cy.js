describe('LoginScenario spec', () => {
  it('ValidLogin', () => {
    cy.visit('https://staging.dokmee.com/DokmeeECM/#/login')
    cy.get('[id="tf_UserName"]').type('atest')
    cy.get('[id="tf_Password"]').type('@Dokmee123$*')
    cy.get('[id="btn_SubmitLogin"]').click();
    
  })
  it('InvalidLogin', () => {
    cy.visit('https://staging.dokmee.com/DokmeeECM/#/login')
    cy.get('[id="tf_UserName"]').type('atest1')
    cy.get('[id="tf_Password"]').type('@Dokmee123$*')
    cy.get('[id="btn_SubmitLogin"]').click();
    cy.get('.ml-1').should('have.text', 'Invalid username or password.')
    
  })
})