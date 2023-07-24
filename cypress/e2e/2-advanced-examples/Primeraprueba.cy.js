//Para hacer un grupo de pruebas: en describe va el nombre 
describe("MI primera prueba", function() {
    var a = 3+2
    var b = 10 + 2
// it es para descrbir los casos de prueba
it ("Vamos a ver que se sume bien",function(){
expect(a==b).to.equal(false);
// recuerda poner la dos comillas para poder pedir otra funcion
});
it ("Vamos a ver que se sume bien",function(){
    expect(a-b).to.equal(false);
    })

})



