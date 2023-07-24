describe("Funcionalidad barra de busqueda", function(){
    it("Escribir y limpiar",function(){
        cy.visit("https://www.google.com/?hl=es");
        cy.get('.gLFyf').click().type("Las locuras de Cesar").clear()
        .type("Carlos Orlando Echagarreta Parada");
        
    //Para concatenar comando, se debe de colocar el punto. seguido del comando de cypress, si ha un elemento hay que darle distintos comportamiento se debe de cocatenar
// abrir cypress: ./node_modules/.bin/cypress open



    })

})
