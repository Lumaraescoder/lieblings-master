
describe('Nav Menus', () => {
  // For desktop view

  context('iphone-5 resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport('iphone-5');
    });
    describe('It will', () => {

      it('Should visit home page', () => {
        cy.visit('http://localhost:4200/');
      });

      describe('Hamburger Menu', () => {
        it('Will check Hamburger menu then open the menu', () => {

          cy.get('._sidenav__toggler').should('be.visible');
          cy.get('._sidenav__toggler').click();
          cy.get('.sidenav').should('be.visible');
        });
      });
    });

  });

  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    describe('Will visit hour header and check if navbar exist', () => {
      it('Should visit home page', () => {
        cy.visit('http://localhost:4200/');
      });
    })
    it('check Header', () => {
      cy.get('header').should('be.visible');
    })
  });

})