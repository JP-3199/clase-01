const nombre="Dario gomez";
const edad= 19;
const ciudad="Armenia";

const mensaje = `Hola me llamo ${nombre} tengo ${edad} y vivo en ${ciudad}`;
console.log(mensaje)

const anio= 2026

const mensajeedad = `Naci en el año ${anio-edad}`;
console.log(mensajeedad)

let edadtexto= "19";
const mensajeedadt = ` ${edadtexto+1}`;
console.log(mensajeedadt)

edadtexto=Number(edadtexto)
const mensajeedadtexto = ` ${edadtexto +1}`;
console.log(mensajeedadtexto)

//Los resultados son diferentes porque uno lo toma como un numero y lo suma (let=20), y el otro lo toma como un caracter mas(let=191)