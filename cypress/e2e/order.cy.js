/// <reference types="cypress" />


describe('home page test', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000')
    })
  
    it('Anasayfadaki buton sipariş sayfasına yönlendiriyor mu?', () => {
      
      cy.get('button').click();
    });
  })

  describe('form order tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    });

    it('Pizza boyutu seçiliyor mu?', ()=>{
        cy.get('[type="radio"]').first().check()
    })

    it('Pizza hamuru seçiliyor mu?',()=>{
        cy.get('[type="select"]').select('crust').should('have.value', 'Normal')
    })

    it('ekstra malzemelerden en fazla 10 adet seçiliyor mu?', ()=>{
      cy.get('[type="checkbox"]').check();
    })
    
  })
  