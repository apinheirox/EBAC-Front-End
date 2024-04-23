describe('Inclusão de Contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Adiciona um novo contato', () => {
      cy.get('[data-testid=add-contact-button]').click();
  
      cy.get('[data-testid=name-input]').type('Novo Contato');
      cy.get('[data-testid=email-input]').type('novocontato@example.com');
      cy.get('[data-testid=phone-input]').type('123456789');
  
      cy.get('[data-testid=save-button]').click();
      
      cy.contains('[data-testid=contact-name]', 'Novo Contato').should('exist');
      cy.contains('[data-testid=contact-email]', 'novocontato@example.com').should('exist');
      cy.contains('[data-testid=contact-phone]', '123456789').should('exist');
    });
  });