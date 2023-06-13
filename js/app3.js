
let alert = document.getElementById("alert1");
let boton = document.getElementById("resultado1")
boton.addEventListener('click',resultado1);

function resultado1() {
    let ingreso = document.getElementById("ingreso1").value ;
    let egreso = document.getElementById("egreso1").value ;
    if (ingreso > egreso) {

        let datoIngreso = parseFloat(ingreso - egreso);
        alert1.innerHTML= "Obtuvo ganancias en Enero"+ (datoIngreso);
    } else{
        let datoIngreso = parseFloat(ingreso - egreso);
        alert1.innerHTML= "Obtuvo perdidas en Enero"+ (datoIngreso);
        
    }


}
let alert2 = document.getElementById("alert2");
let boton2 = document.getElementById("resultado2")
boton.addEventListener('click',resultado2);

function resultado2() {
    let ingreso = document.getElementById("ingreso2").value ;
    let egreso = document.getElementById("egreso2").value ;
    if (ingreso > egreso) {

        let datoIngreso = parseFloat(ingreso - egreso);
        alert2.innerHTML= "Obtuvo ganancias en Enero"+ (datoIngreso);
    } else{
        let datoIngreso = parseFloat(ingreso - egreso);
        alert2.innerHTML= "Obtuvo perdidas en Enero"+ (datoIngreso);
        
    }


}