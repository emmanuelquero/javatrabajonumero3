let a = new Date ();
console.log (a)
class   Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.vendido = false;
        this.stock= 8
    }
    sumaIva() {
        this.precio = this.precio * 0.55;
    }
    vender () {
        this.vendido = true;
        if(this.stock<=0) {
            console.log("no hay mas")
        }else {
            this.stock = this.stock-1
        }
    }
   
}

let producto1 = new Producto ("Ford", "3000000");
let producto2 = new Producto ("Chevrolet", "2500000");
let producto3 = new Producto("Fiat" , "1500000")

producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIva();

producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();
producto2.vender();

producto3.vender();

console.log(producto1)
console.log(producto2)
console.log(producto3)
//APLICACION DE METODOS DE ARRAY
console.group("Metodos Arrays")
let producto4 = "Nissan"
console.log(producto4.length)
console.groupEnd()
console.group("Tipos de automoviles")
const tipos = ["Autos", "Camioneta", "Utilitario", "Motos"]
for(let i=0; i<tipos.length; i+=1) {
    console.log(tipos[i])
    document.write("<p>" + tipos [i] + "</p>")
}
tipos.push ("4x4", "Cuatriciclos")
//console.log(tipos)
tipos.pop ()
console.table (tipos)
console.table (tipos.join(`,`))
console.groupEnd ()
console.group("Metodo concat")
const colores = ["Azul", "Blanco", "Negro", "Gris"]
const mix = tipos.concat (colores)
console.table ("Mix: "+mix)
console.table ("colores que hay:" +colores)
console.table ("tipos: "+tipos)
console.groupEnd()
console.group("Metodo Slice")
const otro = tipos.slice(1,3)
console.table(otro)
console.groupEnd()
console.group("INDEXOF")
console.log(colores.indexOf("Azul"))
console.log(colores.indexOf("naranja"))
console.groupEnd()

const nuevosproductos = ["FiatPalio", "FordFiesta", "VolskwagenGol", "FiatTipo", "ChevroletCorsa"]

nuevosproductos.forEach ((autos) =>{
    if (autos === "FordFiesta"){
        console.log ("Ese auto esta disponible")
    }
})
nuevosproductos.forEach ((autos) =>{
    if (autos === "FordFocus"){
        console.log ("Ese auto no esta disponible")
    }else {
        console.log ("No tenemos lo que estas buscando")
    }
})

console.group("Metodo some")
const informacion = [
    {nombre: "FiatPalio", precio: 1500000},
    {nombre: "FordFiesta", precio: 2500000},
    {nombre: "FiatTipo", precio: 3500000},
    {nombre: "ChevroletCorsa", precio: 1000000}
]
console.table(informacion)
const existen = informacion.some(item => item.nombre = "FiatTipo")
console.log(existen)

const e = informacion.some (item => item.precio > 2000000);
console.log (e)

colores.forEach((coloress, index) => {
    if (coloress === "Azul") {
        console.log (`Encontraste el color en el indice ${index}`)
    }
})

let total = 0;
informacion.forEach ((informacion) => {
    total += informacion.precio
    console.log (`El total de todos los productos sumados es:${total}`)
})
console.groupEnd()
console.group("Carrito")

let carrito = informacion.reduce ((total,item)=> total += item.precio, 0)
console.log (carrito)
 let res = informacion.filter (item=> item.precio>2500000)
 console.log (res)
 console.groupEnd()
 console.group ("Ventas")
 let autosImpuestos = informacion.map (item=> item.precio + (item.precio*1.21))
 console.log (autosImpuestos)