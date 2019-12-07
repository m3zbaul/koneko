describe('Page 2', function() {
  it('successfully loads', function() {
    cy.visit('/page-2');

    cy.get('h2').should('contain', 'Page 2');
  });
});
