
/* eslint-disable no-undef*/

describe( 'Nav Menus', () => {
  //Desktop
  context( '720px resolution', () => {
    beforeEach( () => {
      cy.viewport( 1280, 720 );
    } );
    describe( 'When you visit home', () => {
      it( 'Should navigate to homepage', () => {
        cy.visit( '/' );
      } );
      describe( 'nav', () => {
        it( 'Should navigate to About Page', () => {
          cy.get( '[data-cy=nav-item]' ).contains( 'About' ).click();
          cy.url().should( 'include', '/about/' );
        } );
      } );
    } );
  } );

  //Mobile
  context( 'iphone-5 resolution', () => {
    beforeEach( () => {
      cy.viewport( 'iphone-5' );
    } );
    describe( 'When you visit home', () => {
      it( 'Should navigate to homepage', () => {
        cy.visit( '/' );
      } );
      describe( 'Mmenu', () => {
        it( 'Should open the mmenu', () => {
          cy.get( '[data-cy=mmenu-btn]' ).click();
        } );

        describe( 'nav', () => {
          it( 'Should navigate to About Page', () => {
            cy.get( '[data-cy=nav-item]' ).contains( 'About' ).click();
            cy.url().should( 'include', '/about/' );
          } );
        } );
      } );
    } );
  } );
} );