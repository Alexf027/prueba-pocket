const listaPersonas = [
    { nombre: "Sara", edad: 16 },
    { nombre: "Laura", edad: 18 },
    { nombre: "Andres", edad: 22 },
    { nombre: "Carlos", edad: 20 }
];

function mayoresDeEdad(personas) {
    return personas
        .filter(persona => persona.edad >= 18)
        .sort((a, z) => a.nombre.localeCompare(z.nombre));
};

const mayoresOrdenados = mayoresDeEdad(listaPersonas);
console.log(mayoresOrdenados);