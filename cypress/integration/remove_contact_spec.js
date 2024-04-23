describe('Remoção de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('[data-testid=add-contact-button]').click();
      cy.get('[data-testid=name-input]').type('Contato para Remover');
      cy.get('[data-testid=email-input]').type('contatoremover@example.com');
      cy.get('[data-testid=phone-input]').type('111222333');
      cy.get('[data-testid=save-button]').click();
    });
  
    it('Remove um contato existente', () => {
      cy.contains('[data-testid=contact-name]', 'Contato para Remover')
        .parent()
        .find('[data-testid=remove-contact-button]')
        .click();
  
      cy.get('[data-testid=confirm-remove-button]').click();

      cy.contains('[data-testid=contact-name]', 'Contato para Remover').should('not.exist');
    });
  });