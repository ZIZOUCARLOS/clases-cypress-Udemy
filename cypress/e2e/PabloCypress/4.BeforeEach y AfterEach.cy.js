describe("Nombre del caso de pruebas",function(){
    before(function(){
    cy.log("Estar en : https://www.google.com/?hl=es ");
    })
    after(function(){
        cy.log("Despues de las precondicones se debe de ejecutar esto");
    })
    //BeforeEach y AfterEach
    beforeEach(function(){
        cy.visit("https://www.google.com/?hl=es")
    })
    afterEach(function(){
        cy.log("Vamos a Regresar los datos, esto es un ejemplo");
    })
    it("Probando los comandos before y after",function(){
            cy.get('.gLFyf').click().type("Las locuras de Cesar").clear()
            .type("Carlos Orlando Echagarreta Parada").clear();
    })
    it("Probando los comandos before y after",function(){
            cy.get('.gLFyf').click().type("Las locuras de Cesar").clear()
            .type("dragon ball z");
        })
    })

    //Precondiciones comunes a las pruebas, se va ejecutar antes de cada prueba.
    //Cuando se termina una prueba se ejecuta.
    // abrir cypress: ./node_modules/.bin/cypress open