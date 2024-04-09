describe('Remoção de Contato', () => {
    it('Remove um contato existente', () => {
      cy.visit('/contatos');
      cy.contains('Contato Existente').click();
      cy.get('[data-testid="botao-remover"]').click();
      cy.contains('Contato Existente').should('not.exist');
    });
  });
  