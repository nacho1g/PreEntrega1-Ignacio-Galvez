let edad, fecha = 2023, nombre ="";
edad = parseInt(prompt("Ingrese su edad"));
fecha -= edad;
console.log(fecha);
if(edad < 18){
    alert("Usted es menor de edad");
}
else{
    let turno = 10;
    alert("Probablemente nacio en "+ fecha) ;
    nombre = prompt("Ingrese su nombre");
    console.log(nombre);
    alert(nombre+", su turno es el "+turno+" espere a ser atendido.");
    for(contar =0; contar < turno; contar++){
        console.log(contar);
    }
    alert("Siguente turno "+ turno);

}

