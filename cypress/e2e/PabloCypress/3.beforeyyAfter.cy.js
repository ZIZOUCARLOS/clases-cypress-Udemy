describe("Nombre del caso de pruebas",function(){
before(function(){
cy.log("Estar en : https://www.google.com/?hl=es ");
})
after(function(){
    cy.log("Despues de las precondicones se debe de ejecutar esto");
})
it("Probando los comandos before y after",function(){
    cy.visit("https://www.google.com/?hl=es");
        cy.get('.gLFyf').click().type("Las locuras de Cesar").clear()
        .type("Carlos Orlando Echagarreta Parada").clear();
})
})

//Before se utiliza para realizar algun texto antes de que se realicen todo los Test.(Que ejecutar ante todos los test)
//after se utiliza para informar algo despues que se realizaron todas las pruebas. (Pos-condicions de todo los test).
// abrir cypress: ./node_modules/.bin/cypress open
