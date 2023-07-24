describe("US # : Aqui escribe el titulo de la US", function()
{
    beforeEach("Precondicion: Aqui empiezas escribiendo una precondicion o mas", function() 
    {
        cy.visit("https://jamstacktata.vtex.app/")// el comando de accion directa
        it( "US # - TC#1- AQUI PUEDES ESCRIBIR LOS CASOS DE PRUEBA", function () 
        {
           cy.get( "['']")// Sintaxis comando get de selector de Atributos.
             .eq(2)// Esto es un metodo opcional.
             .click()// Esto es un metodo de interaccion.
        })
        it('US # - TC#2: Aqui puedes ocupar otro caso de prueba ', () => 
        {
            cy.get("#query-btn")// Sintaxis comando get de selector de Atributos de IDs.
             
             .click()// Esto es un metodo de interaccion.
        });
        it('US # - TC#2: Aqui puedes ocupar otro caso de prueba ', () => 
        {
            cy.get("#query-btn")// Sintaxis comando get de selector de Atributos de IDs.
             .click()// Esto es un metodo de interaccion.

        })
        it('US # - TC#3: Aqui puedes ocupar otro caso de prueba ', () => 
        {
            cy.get(".query-btn")// Sintaxis comando get de selector de clases.
             .should('contain.tex', 'Button')// Esto es un metodo de interaccion.

        })
// abrir cypress: ./node_modules/.bin/cypress open


    } )


} )
//Dom al grano capitulo 12 de testing aqui vas a seleccionar los elementos

//SELECTOR DE ELEMENTOS

// $$('')// Se utiliza para seleccionar elementos de tipo CSS. ( Cualquier elemento).
//1.ID:
//PARA BUSCAR UN ID, SE UTILIZA # MAS EL NOMBRE: $$("#")
//# El hatach es el ID es el nombre del Id

//2. CLASES
// SE SELECCIONA CON UN PUNTO .:    $$(".")

// 3.CLEAR PARA BORRAR : clear ()

//4.Entrar en un ARRAY EN CYPRESS:
//$$('firch-body').eq(mas el numero) o []

// 5.SELECCIONAR UN ATRIBUTO ES MEJOR QUE UN ID YA QUE EL ID PUEDEN ACTUALIZARSE, EL ATRIBUTO LO VUELVE UNICO.
//$$("[type='fish']") la mejor manera de seleccionar atributos es comillas dobles afuera y simples adentro, MAS SU NOMBRE.

//COlocar una clase con espacio:
//$$(unir el nombre con un punto)

//Seleccionar una clase hija de una clase padre: con el simbolo>
//$$('nombre de la clase>')

////Seleccionar una clase hija de una clase padre: con el simbolo> y para seleccionar todas las hijas con *
//$$('nombre de la clase>'*)

//Entrar a una clase padre a una clase hija.
// para entrar en otra clase es >. mas el nombre de la clase, esto es para entrar en una clase que es padre de otra.

// Buscar todas las decendencias, se debe de dejar un espacio, busca todas las decendientes, puede ser para una clase un id o atributo, te adentras al elemento seleccionado
//$$(".fish.red-fish option")
// si colocas un array seleccionas ese elemento= $(".fish.red-fish option")[2]

// Atributos
//$$("['move='fast']")

// puedes utilizar SQL
//$$("['move^"='f']") para utilizar la letra colocas ^

//// puedes utilizar SQL
//$$("['move*"='f']") para buscar todos los elementos con letras*

//// puedes utilizar SQL
//$$("['move$"='f']") para buscar elementos que terminen con la letra $.

// Ordn para buscar elementos
// 1. Tag(REPETITIVO), ID(Autogenerado cada reload),ATRIBUTO(Ser unicos), CLASS(SON CAMBIABLES) 