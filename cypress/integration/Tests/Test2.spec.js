describe('Test Scenario 2', () => {
  it('should open LambdaTest Selenium Playground page on Samsung Note 9 and click "Input Form Submit"', () => {
    // Open the page and adjust viewport to Samsung Note 9
    cy.viewport('samsung-note9')
    cy.visit('https://www.lambdatest.com/selenium-playground')

    // Wait for all elements on the page to load completely
    cy.wait(3000) // Adjust wait time as needed

    // Click "Input Form Submit" under "Input Forms"
    //cy.contains('Input Forms').click()
    cy.contains('Input Form Submit').click()

    //Audit
    cy.injectAxe()
    cy.checkA11y()

    //fill the form
    cy.get('#name').type('Hello')
    cy.get('#inputEmail4').type('helloworld@mail.com')
    cy.get('#inputPassword4').type('HelloWorld@23')
    cy.get('#company').type('HelloWorld')
    cy.get('#websitename').type('www.ajsndsad.com')
    cy.xpath('//*[@id="seleniumform"]/div[3]/div[1]/select').select('IN').should('have.value', 'IN')
    cy.get('#inputCity').type('tiruppur')
    cy.get('#inputAddress1').type('tanson')
    cy.get('#inputAddress2').type('work')
    cy.get('#inputState').type('tamilnadu')
    cy.get('#inputZip').type('641602')
    // cy.get('button[type="submit"]').click()
    cy.get('.bg-lambda-900').click()
    cy.scrollTo('top')
    cy.wait(5000)
    cy.get('.bg-lambda-900').should('not.be.visible').then((($button) => {
      if ($button) {
        cy.log('Form Successful')
      } else {
        cy.log('Not submitted')
      }
    }))

    cy.lighthouse()
    cy.contains('Thanks for contacting us, we will get back to you shortly.')
        .should('be.visible')

    cy.window().then((win) => {
      win.close()
    })
  })
})
