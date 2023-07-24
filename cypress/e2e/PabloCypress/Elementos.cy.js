describe('Formas de encontar un elemento', function (){
    it('buscar en el buscador', function () {
        
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('HOLA')//Buscar por class(clase)
        cy.get('[name="q"]').type(" Carlos Orlando Echagarreta Parada es lo mejor del mundo")// Buscar por atributo, por nombre(name)
        cy.get('.gLFyf').clear() // Para borrar un elemento.
        
    } )

} )