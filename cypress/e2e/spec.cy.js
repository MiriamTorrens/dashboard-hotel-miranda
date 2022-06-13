/* eslint-disable no-undef */
describe('/login', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/login');
  })
  it('Aparece el formulario', () => {
    cy.contains('input', 'Login');
  })
  it('Requiere usuario', () => {
    cy.get('[data-cy="user"]').should('have.attr', 'required');
  })
  it('Requiere contraseña', () => {
    cy.get('[data-cy="password"]').should('have.attr', 'required');
  })
  it('No se dirige a una ruta privada sin iniciar sesión', () => {
    cy.visit('localhost:3000/dashboard');
    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));
  })
  it('Se mantiene en login con usuario incorrecto', () => {
    cy.get('[data-cy=user]').type("Pepe");
    cy.get('[data-cy=password]').type("1234");
    cy.get('[data-cy=submit]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));
  })
  it('Se mantiene en login con contraseña incorrecta', () => {
    cy.get('[data-cy=user]').type("miriam");
    cy.get('[data-cy=password]').type("0000");
    cy.get('[data-cy=submit]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));
  })
  it('Se dirige a /dashboard si el login es correcto', () => {
    cy.get('[data-cy=user]').type("miriam");
    cy.get('[data-cy=password]').type("1234");
    cy.get('[data-cy=submit]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/dashboard'));
  })
})