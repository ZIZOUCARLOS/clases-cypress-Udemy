describe("Ajustes de SKU", function ()
{
    beforeEach("Precondicion: Visitar la pagina",function () 
    {
        cy.visit("https://www.google.com.br/")
        //Responsive colocas el tamaño
        //cy.viewport("iphone-6")
       
        
    });
    it('ATM-633-TC01-Validar que el tamaño del botón Agregar sea igual al Figma.', () => 
    {
        //cy.get("html")
    
        cy.get('.gLFyf').type("Dragon ball Z")
        cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click()
        //Atributos
        .should("have.attr","type","Dragon")// Deberia tener atributo
        
        
    });

})