import { waitForDebugger } from 'inspector';

require('cypress-xpath');
describe('Documentos Acueducto', function () {
  beforeEach(function () {
    cy.visit('https://www.munisc.go.cr/Paginas/Visitantes/Documentos.aspx');
  });

  it('Formulario de disponibilidad de agua', function () {
    //cambiar a buscar por departamento
    cy.xpath(
      '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[1]/label[2]/input'
    )
      .click()
      .then(() => {
        cy.xpath(
          '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[2]/select'
        )
          .select('Acueducto')
          .then(() => {
            cy.xpath(
              '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[4]/div/table/tbody/tr[7]/td[1]'
            ).should(
              'have.text',
              'Formulario solicitud para diponibilidad de agua'
            );
          });
      });
  });
  afterEach(function () {
    cy.reload();
  });
});

describe('Documentos Administración', function () {
  beforeEach(function () {
    cy.visit('https://www.munisc.go.cr/Paginas/Visitantes/Documentos.aspx');
  });

  it('Formulario de administración', function () {
    //cambiar a buscar por departamento
    cy.xpath(
      '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[1]/label[2]/input'
    )
      .click()
      .then(() => {
        cy.xpath(
          '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[2]/select'
        )
          .select('Administración')
          .then(() => {
            cy.xpath(
              '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[4]/div/table/tbody/tr/td/div/span'
            ).should('have.text', 'No existen documentos relacionados.');
          });
      });
  });
  afterEach(function () {
    cy.reload();
  });
});

describe('Documentos Alcaldía', function () {
  beforeEach(function () {
    cy.visit('https://www.munisc.go.cr/Paginas/Visitantes/Documentos.aspx');
  });

  it('Código Municipal', function () {
    //cambiar a buscar por departamento
    cy.xpath(
      '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[1]/label[2]/input'
    )
      .click()
      .then(() => {
        cy.xpath(
          '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[2]/select'
        )
          .select('Alcaldía')
          .then(() => {
            cy.xpath(
              '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[4]/div/table/tbody/tr[2]/td[1]'
            ).should('have.text', 'Código Municipal');
          });
      });
  });
  afterEach(function () {
    cy.reload();
  });
});

describe('Documentos Administración Tributaria', function () {
  beforeEach(function () {
    cy.visit('https://www.munisc.go.cr/Paginas/Visitantes/Documentos.aspx');
  });

  it('Código Municipal', function () {
    //cambiar a buscar por departamento
    cy.xpath(
      '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[1]/label[2]/input'
    )
      .click()
      .then(() => {
        cy.xpath(
          '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[2]/select'
        )
          .select('Administración Tributaria')
          .then(() => {
            cy.xpath(
              '/html/body/form/div[3]/div[2]/div[1]/div[3]/div/div[2]/fieldset/div[4]/div/table/tbody/tr[4]/td[1]'
            ).should('have.text', 'Patente Comercial');
          });
      });
  });
  afterEach(function () {
    cy.reload();
  });
});
