describe("Esta es una prueba que se va a realizar para los checkbox",function(){
before(function(){
cy.log("Esta prueba es solamente para probar los botones de checkbox");
})
after(function(){
cy.log("Despues de cada prueba, solamente lo que se va aprobar es el boton");
})
beforeEach(function(){
    cy.viewport(1440, 900)
    cy.visit("https://www.pardo.com.ar/telefon%C3%ADa/celulares?initialMap=c,c&initialQuery=telefonia/celulares&map=category-1,category-2&query=/telefonia/celulares&searchState");
    })
    afterEach(function(){
        cy.log("Vamos a Regresar los datos, esto es un ejemplo");
    })
    it("Botones Checkbox",function(){
    
        cy.get('#brand-motorola')
        $$(".vtex-checkbox__input h1 w1 absolute o-0 pointer").check();
    })

})
// abrir cypress: ./node_modules/.bin/cypress open
//Falta por aprender