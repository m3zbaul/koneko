describe('Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/');

    cy.get('h2').should('contain', 'Home');
  });
});
