describe("Escribir en busqueda varios strinng", function (){

    it(" Vamos a escribir y buscar", function () {
    cy.visit("https://www.google.com/")
    //cy.get('[name="q"]').type(" Carlos Orlando Echagarreta Parada es lo mejor del mundo")// Buscar por atributo, por nombre(name)
    //cy.get('.gLFyf').clear() // Para borrar un elemento.
    // Concatenar:
    //concatenar es para visualizar distintos comportamientos en una misma linea de codigo.
    cy.get('.gLFyf').type('HOLA').clear().type(" Carlos Orlando Echagarreta Parada es lo mejor del mundo").clear().type("Claro que si")
    } )


} )