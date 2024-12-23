///<reference types="cypress"/>
// Funcionalidade
describe('Login', () =>{

    const tela = [[1366,768]]

    /*
    macbook-16
    Tamanhos Comuns de Viewport
    Desktop padrão grande:
    1920x1080 (resolução Full HD)
    
    Desktop médio:
    1440x900 (resolução comum para notebooks maiores)
    
    Desktop pequeno ou laptop compacto:
    1366x768 (resolução muito usada em notebooks populares).
    
    Tablet:
    768x1024 (iPad em orientação retrato).
    
    Mobile:
    375x667 (iPhone 6, 7, 8)
    360x640 (resolução comum de Androids).
    */
    
    tela.forEach(element => {
        
        beforeEach( () => {
            if (Array.isArray(element)) {
                // Se o elemento for um array, configura dimensões customizadas
                cy.viewport(element[0], element[1])
            } else {
                // Caso contrário, usa o tamanho predefinido
                cy.viewport(element)
            }
            cy.visit('/login')
        })
        
        // Cenário de Login
        it(`Login da senha errada - ${element}`, () => {
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

}) // Fim Tela
    


// pega elemento direto > cy.get()
// por texto > cy.get().contains()
// elemento > cy.get().find()