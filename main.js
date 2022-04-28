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

const nuevosproductos = [
{nombre: "Volskwagen Gol", precio: 1500000, color: negro},
{nombre: "Ford Sierra", precio: 100000, color: verde},
{nombre: "Volskwagen Amarok", precio: 5000050, color: gris},
{nombre: "Ford EcoSport", precio: 3000000, color: blanco}
]
