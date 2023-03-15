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
        cy.get('[data-cy="size-medium"]').check()
    })

    it('Test dough-dropdown', () => {
        cy
        .get('[data-cy="crust-normal"]')
        .should('have.value', 'Normal')
        })

    it('Ekstra malzemelerden en fazla 10 adet seçiliyor mu?', ()=>{
      cy.get('[type="checkbox"]').check();
    })

    it('Not ekleniyor mu?', () => {
      cy.get('[type="text"]').type("123")
    })
  })

  describe('Form submit oluyor mu?', ()=>{
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    it('Form öğeleri dolunca buton aktif oluyor mu?', ()=>{

      cy.get('[type="radio"]').first().check();
      cy.get('.crust>.crust-normal').click();
      cy.get('[type="checkbox"]').check();
      cy.get('[type="text"]').type("123");
      cy.get('[data-cy="formSubmit"]').submit();
    })
  })
  