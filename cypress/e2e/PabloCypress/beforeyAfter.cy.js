describe("Buscar test de pruebas",function (){
    //Precondicones
    before(function(){
        cy.log('Ejecutando las PRECONDICIONES A LAS PRUEBAS')
    })
    after(function(){
        cy.log('Ejecutando todas las POSCONDICIONES a las pruebas')
    })
    beforeEach(function(){
        cy.visit('https://www.google.com/')
    })
    // Poscondioiones
    afterEach(function(){
        cy.log('PONIENDO DATOS A SU ESTADO ORIGINAL');
     })
    it('Buscar Direccion',function() {
    cy.get('.gLFyf').type('Direccion')
    cy.get(':nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
    })
    it('Buscar Dragon Ball Super',function() {
        cy.get('.gLFyf').type('Dragon Ball Super')
        cy.get(':nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
        })
    
})



