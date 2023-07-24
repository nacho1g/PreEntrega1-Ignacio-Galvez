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
    this. edad = edad;
}

name = prompt("Ingrese su nombre");

lastname = prompt("Ingrese su apellido");
age = parseInt(prompt("Ingrese su edad"));
while( Number.isNaN(age) == true){
    age = parseInt(prompt("No ingresaste un numero"));
}

turn = new Turno(name,lastname,age);
turnos.push(turn);

turnos.forEach(element => console.log(element));

for(let i = 0; i< turnos.length; i =0){
    alert("Es el turno de " + turnos[i].nombre);
    turnos.shift();
}



