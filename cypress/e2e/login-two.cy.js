///<reference types="cypress"/>
// Funcionalidade
describe('Login', () =>{
        beforeEach( () => {
            cy.visit('/login')
        })
        
        // Cenário de Login
        it(`Login da senha errada`, () => {
            // Dado
            cy.get('#user').type('amanda@gmail.com', { log: false })
            cy.get('#password').type('12345', { log: false })
            cy.get('#materialUnchecked').check()
            
            // Quando
            cy.get('#btnLogin').click()
    
            // Então
            cy.get('.invalid_input')
                .should('have.text', 'Senha inválida.')
                .should('be.visible')
        })
    
        it('Login da senha vazia', () => {
            // Dado
            cy.get('#user').type('xpto@teste.com', { log: false })
            cy.get('#materialUnchecked').check()
            
            // Quando
            cy.get('#btnLogin').click()
    
            // Então
            cy.get('.invalid_input')
                .should('have.text', 'Senha inválida.')
                .should('be.visible')
        })
    
        it('Login do email errada', () => {
            // Dado
            cy.get('#user').type('xpto', { log: false })
            cy.get('#password').type('12345', { log: false })
            cy.get('#materialUnchecked').check()
            
            // Quando
            cy.get('#btnLogin').click()
    
            // Então
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })
    
        it('Login do email vazio', () => {
            // Dado
            cy.get('#password').type('12345', { log: false })
            cy.get('#materialUnchecked').check()
            
            // Quando
            cy.get('#btnLogin').click()
    
            // Então
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })
    
        it('Login do campos vazios', () => {
            // Dado
            cy.get('#materialUnchecked').check()
            
            // Quando
            cy.get('#btnLogin').click()
    
            // Então
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })
    })
    


// pega elemento direto > cy.get()
// por texto > cy.get().contains()
// elemento > cy.get().find()