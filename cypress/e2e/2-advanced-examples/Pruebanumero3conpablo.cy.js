describe('Verificar la pagina de anime',function () 
{
it('Entrar al home de Anime', function () 
{
cy.visit("https://www.tata.com.uy/")//visitar esta pagina
cy.get('.react-select__value-container').click();// HACER CLICK PARA BUSCAR EL LUGAR O ZONA
cy.get('#react-select-2-option-0').click();// ZONA MOMTEVIDEO
cy.get('.styles__Content-sc-1q1bs27-4 > .jss60').click();// HACER CLICK CONFIRMAR
cy.get('body').click();
cy.get('.styles__Container-jwv2i0-0 > .jss37 > .jss47').type("cerveza");



} )
} )