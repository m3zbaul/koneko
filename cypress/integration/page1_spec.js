describe('Page 1', function() {
  it('successfully loads', function() {
    cy.visit('/page-1');

    cy.get('h2').should('contain', 'Page 1');
  });
});
