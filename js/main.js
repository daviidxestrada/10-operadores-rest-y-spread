
/* REST */


const mostrarColores = (color1, ...colores)=>{
    console.log(color1)
    console.log(colores)
}

mostrarColores("rojo","verde","azul")

const arrayColores =["rojo","verde","azul","allo"]

// const [color1, color2, ...restoColores] = arrayColores

// console.log(color1,color2, restoColores)

/* SPREAD */


const copiaArray=[...arrayColores]
console.log(copiaArray)

const objAlumno={
    nombre:"Pepe",
    edad:"18"
}

const nuevoAlumno = {...objAlumno, 
    curso:"JS"
}

nuevoAlumno.nombre = "Ana"

console.log(objAlumno)
console.log(nuevoAlumno)

const mostrarCosas=(cosa1,cosa2)=>{
console.log(cosa1)
console.log(cosa2)
}

const arrayCosas=["mesa","silla","boli","ratón"]

mostrarCosas(...arrayCosas)