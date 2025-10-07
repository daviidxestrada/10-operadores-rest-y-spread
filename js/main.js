/*EJERCICIO CHATTY*/

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Sofía", edad: 22 }
];

const [primero, ...otrosUsuarios] = usuarios
console.log(otrosUsuarios)
console.log(primero)

const nuevosUsuarios = [...otrosUsuarios, {nombre:"Marcos",edad:27}]

console.log(nuevosUsuarios)