describe("TC hard code - Login", function () // Describe el titulo de la US
{
    beforeEach("Visitar la pagina de Login", function () //Precondicion
    {
cy.visit("https://demo.testim.io/login")// visita esta pagina
cy.contains("log in").should("be.visible")
cy.url().should("contain","testim")// para validar que esta dentro de la pagina
cy.contains("log in").click()

    })
    it("TC1: Hacer login exitosamente", function () 
    {
    cy.get("[type='text']").eq(4)//Username
    cy.get("[type='Password']")//Paword
        .type("12345")
    cy.get("button[type='submit']")//Boton de Login
        .click()
    })
    cy.contains("hello").should("be.visible")// contains: es para buscar el texto en el dom

} )