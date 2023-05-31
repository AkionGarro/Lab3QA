import { waitForDebugger } from 'inspector';

require('cypress-xpath');

// Caso de prueba 1: Clase de Equivalencia para Documentos del Acueducto
// Objetivo: Verificar si se encuentran los documentos de solicitud para diponibilidad de agua
// Datos de prueba:
// Buscar: "departamento" = Acueducto
// Resultado esperado:
// Formulario solicitud para diponibilidad de agua se encuentre en la lista

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
        //seleccionar acueducto
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

// Caso de prueba 2: Clase de Equivalencia para Documentos del Administración
// Objetivo: Que no se deben de mostrar documentos relacionados
// Datos de prueba:
// Buscar: "departamento" = Administración
// Resultado esperado:
// No existen documentos relacionados.
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
        //seleccionar Administración
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

// Caso de prueba 3: Clase de Equivalencia para Alcaldía
// Objetivo: Verificar si se encuentran los documentos de Código Municipal
// Datos de prueba:
// Buscar: "departamento" = Alcaldía
// Resultado esperado:
// Formulario de Código Municipal
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
        //seleccionar Alcaldía
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

// Caso de prueba 4: Clase de Equivalencia para Documentos de Administración Tributaria
// Objetivo: Verificar si se encuentran los documentos de Patente Comercial
// Datos de prueba:
// Buscar: "departamento" = Administración Tributaria
// Resultado esperado:
// Formulario de Patente Comercial
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
        //seleccionar Administración Tributaria
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
