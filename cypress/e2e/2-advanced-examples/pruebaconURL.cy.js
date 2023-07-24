// describe:aqui va el nombre de las pruebas que se van a realizar
describe("minombre y apellido es ",function(){
let CARLOS = "ESTE ES MI NOMBRE";
let ECHAGARRETA = "ES MI APELLIDO"
//IT nombre de los test 
it('EL APELLIDO Y NOMBRE DEBE DE SER IGUALES COMO RESULTADO', () => {
    expect(CARLOS==ECHAGARRETA).to.equal(false)
});

})
