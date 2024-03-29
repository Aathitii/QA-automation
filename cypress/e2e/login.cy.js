
describe('Verify the login functionality', () => {
  beforeEach('to visit login page', () => {
    cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
  })

  it('login button should not be clickable with null data', () => {
    //cy.wait(4000)
    cy.get('.btn').should('be.disabled')
  });

  it('check login functionality with invalid data', () => {
    cy.get('#email').type('test@yopmial.com')
    cy.get('#password').type('Test@123')
    cy.get('.btn').click();
    cy.get('.ng-submitted > :nth-child(1) > :nth-child(6)').should('have.text', ' Incorrect Email Address ! ');
    cy.get(':nth-child(2) > :nth-child(7)').should('have.text', ' Incorrect Password ! ')

  });
  it('check login functionalty with valid data', () => {
    cy.get('#email').type('s.aathiti@gmail.com')
    cy.get('#password').type('Aathiti123@')
    cy.get('.btn').click();
  })

  it('check wrong format of email', () => {
    cy.get('#email').type('abcd')
    cy.get(':nth-child(1) > .invalid-text').should('have.text', ' Invalid Input ')

  })

  it.only('check wrong format of password', () => {
    cy.get('#password').type('erggb')
    cy.get(':nth-child(2) > .invalid-text').should('have.text', ' Invalid Input ')

  })
  var passmask = "Aathiti123@"
  it('check mask and unmasked functionality of password', () => {
    cy.get('#password').type(passmask)
    cy.get('.right-icon').click();
    cy.get('#password').should('have.value', passmask)
  })

  it('login check with clikcing enter in the keyboard', () => {
    cy.get('#email').type('abcd@gmail.com')
    cy.get('#password').type('Test@123{enter}')


  })

})