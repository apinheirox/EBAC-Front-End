describe('Inclusão de Contato', () => {
    it('Adiciona um novo contato', () => {
      cy.visit('/contatos');
      cy.get('[data-testid="botao-adicionar"]').click();
      cy.get('[data-testid="nome-input"]').type('Novo Contato');
      cy.get('[data-testid="email-input"]').type('novo@email.com');
      cy.get('[data-testid="telefone-input"]').type('123456789');
      cy.get('[data-testid="botao-salvar"]').click();
      cy.contains('Novo Contato').should('exist');
    });
  });
  