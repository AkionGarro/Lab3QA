require('cypress-xpath');
describe('Login', function () {
  beforeEach(function () {
    cy.visit('https://tecdigital.tec.ac.cr/');
  });

  it('Nombre de usuario requerido', function () {
    cy.xpath(
      '/html/body/div[1]/div/div[2]/div[1]/div[2]/div[3]/div[3]/form/div[4]/div/button'
    )
      .click()
      .then(function () {
        cy.xpath(
          '/html/body/div[1]/div/div[2]/div[1]/div[2]/div[3]/div[3]/form/div[1]/div/md-input-container/div[2]/div'
        ).should('have.text', 'Por favor ingrese un correo válido.');
      });
  });

  afterEach(function () {
    cy.reload();
  });
});
