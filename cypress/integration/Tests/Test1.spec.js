describe('Slider Test', () => {
  it('Drag slider to make it 95', () => {
    // Visit the page
    cy.visit('https://www.lambdatest.com/selenium-playground')

    // Click on "Progress Bars & Sliders"
    // cy.contains('Progress Bars & Sliders').click()

    // Click on "Drag & Drop Sliders"
    //cy.contains('Drag & Drop Sliders').click()
    cy.contains('Drag & Drop Sliders').click()

    // Find the slider labeled "Default value 15" and set its value to 95
    cy.scrollTo('top')
    // cy.contains('Default value 5')
    //   .parent()
    //   .within(() => {
    //     cy.get('input[type="range"]').invoke('val', 95).click()
    //   })

    cy.scrollTo('top')
    cy.contains('Default value 15')
      .parent()
      .within(() => {
        cy.get('input[type="range"]')
        .then(($el) => $el[0].stepUp(80))
        .trigger('change')
        //cy.get('.sp__range > .sp__range').invoke('val', 55).trigger('onchange')
      })

    // Validate whether the range value shows 95
    cy.scrollTo('top')
    cy.contains('Default value 15')
      .parent()
      .within(() => {
        cy.get('output').should('have.text', '95')
      })
  })
})

// describe('LambdaTest Cypress Tests', () => {
//     it('Test Scenario 1: Drag & Drop Slider', () => {
//       cy.visit('https://www.lambdatest.com/selenium-playground/')
//       cy.wait(1000)
//       cy.document().then((doc) => {
//         const x = 100; // x-coordinate
//         const y = 200; // y-coordinate
//         doc.documentElement.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y }));
//       });
//      // cy.contains('Progress Bars & Sliders').click()
//       cy.contains('Drag & Drop Sliders').click()
//       cy.get('[aria-valuenow="15"]').trigger('mousedown', { which: 1 })
//         .trigger('mousemove', { clientX: 300, clientY: 0 })
//         .trigger('mouseup', {force: true})
//       cy.get('[aria-valuenow="95"]').should('exist')
//     })

//     it.skip('Test Scenario 2: Input Form Submit', () => {
//       cy.visit('https://www.lambdatest.com/selenium-playground', { qs: { port: 'Samsung Note 9' } })
//       cy.wait(2000) // Adjust wait time as needed to ensure all elements load
//       cy.contains('Input Forms').click()
//       cy.contains('Input Form Submit').click()

//       // Validate accessibility standards
//       cy.injectAxe()
//      // cy.checkA11y()

//       // Fill in form fields
//       cy.get('#name').type('John Doe')
//       cy.get('#email').type('john.doe@example.com')
//       cy.get('#website').type('https://example.com')
//       cy.get('#comment').type('This is a test comment')

//       // Submit the form and assert submission
//       cy.get('[type="submit"]').click()
//       cy.contains('Thanks for contacting us, we will get back to you shortly.').should('exist')

//       // Verify performance metrics
//       cy.lighthouse()

//       // Close browser tab and session
//       cy.visit('about:blank')
//       cy.wait(1000)
//       cy.window().then(win => win.close())
//     })
//   })
