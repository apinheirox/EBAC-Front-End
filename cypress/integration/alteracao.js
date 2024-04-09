describe('Alteração de Contato', () => {
    it('Edita um contato existente', () => {
      cy.visit('/contatos');
      cy.contains('Contato Existente').click();
      cy.get('[data-testid="botao-editar"]').click();
      cy.get('[data-testid="nome-input"]').clear().type('Contato Modificado');
      cy.get('[data-testid="botao-salvar"]').click();
      cy.contains('Contato Modificado').should('exist');
    });
  });
  