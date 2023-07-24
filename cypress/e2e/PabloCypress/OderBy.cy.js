//Recuerda que el check box
describe('Pruebas en el sitio de cliquiar', function (){
    beforeEach(function(){
        cy.visit('https://listado.mercadolibre.com.ar/supermercado/alimentos-bebidas/bebidas/cerveza_NoIndex_True#applied_filter_id%3Dcategory%26applied_filter_name%3DCategor%C3%ADas%26applied_filter_order%3D1%26applied_value_id%3DMLA178700%26applied_value_name%3DBebidas%26applied_value_order%3D3%26applied_value_results%3D960%26is_custom%3Dfalse')
    })
    it('Marca,Electrolux,buscar',function(){
        cy.get('[data-testid="action:understood-button"]').click();
        cy.get('.andes-tooltip__buttons > .andes-button--transparent > .andes-button__content').click();
        cy.get(':nth-child(2) > ul > :nth-child(9) > .ui-search-link > .ui-search-filter-name').click();

    })

})
