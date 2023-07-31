let turnos = [
    {
        nombre: "Juan",
        apellido: "Gonzalez",
        edad: 34
    },
    {
        nombre: "Maria",
        apellido: "Alvarez",
        edad: 57
    },
    {
        nombre: "Agustin",
        apellido: "Lopez",
        edad: 21
    },
];
function Turno(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let eNombre = prompt("Ingrese su nombre");  //entrada de nombre

let eApellido = prompt("Ingrese su apellido");
let eEdad = parseInt(prompt("Ingrese su edad"));
while( Number.isNaN(eEdad) === true){
    eEdad = parseInt(prompt("No ingresaste un numero"));
}

let turn = new Turno(eNombre,eApellido,eEdad);
turnos.push(turn);

turnos.forEach(element => console.log(element));

let ePacientes = turnos.map(function(edades){
    return edades.edad
});                                //Edad de pacientes




function ordenarTurnos (array){                       //Ordena de mayor a menos las edades
    return array.sort((a, b) => b -a );
}
let orden = ordenarTurnos(ePacientes);
console.log (orden);

for(let i = 0; i< orden.length; i =0){                       //Da primero el turno a los de mayor edad
    let siguienteTurno = turnos.find(elemento =>{
        return elemento.edad === orden[i];
    })
    console.log(siguienteTurno);
    alert("Es el turno de " +siguienteTurno.nombre
    );
    orden.shift();
}



for(let i = 0; i< turnos.length; i=0){                      //Borra los turnos
    turnos.shift();
}
