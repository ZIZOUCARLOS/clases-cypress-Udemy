describe("Funcionalidad barra de busqueda", function()
{
    it("Ir a la barra de busqueda", function(){
    cy.visit("https://www.google.com/?hl=es");
    //SELECTOR DE CYPRESS Y SE COLA.TYPE()-significa de tipo escribir
    cy.get('.gLFyf').type("tatashop");
    cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
    
    }) 

})


// 3 Maneras de elegir los elementos
// Por la CLASE: que se coloca un punto (".ejemplo de clase se coloca el punto despues de las comillas")
//Por el ID:  con # 
// por Nombre o por cualquiera otra propiedad, ejemplo : ("[Aqui adentro va el elemento]") 
// abrir cypress: ./node_modules/.bin/cypress open