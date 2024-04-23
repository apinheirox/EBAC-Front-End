describe('Alteração de Contato', () => {
    beforeEach(() => {

      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('[data-testid=add-contact-button]').click();
      cy.get('[data-testid=name-input]').type('Contato para Editar');
      cy.get('[data-testid=email-input]').type('contatoeditar@example.com');
      cy.get('[data-testid=phone-input]').type('987654321');
      cy.get('[data-testid=save-button]').click();
    });
  
    it('Edita um contato existente', () => {

      cy.contains('[data-testid=contact-name]', 'Contato para Editar')
        .parent()
        .find('[data-testid=edit-contact-button]')
        .click();
  

      cy.get('[data-testid=name-input]').clear().type('Contato Editado');
      cy.get('[data-testid=email-input]').clear().type('contatoeditado@example.com');
      cy.get('[data-testid=phone-input]').clear().type('555555555');
      cy.get('[data-testid=save-button]').click();
  

      cy.contains('[data-testid=contact-name]', 'Contato Editado').should('exist');
      cy.contains('[data-testid=contact-email]', 'contatoeditado@example.com').should('exist');
      cy.contains('[data-testid=contact-phone]', '555555555').should('exist');
    });
  });