
//Ejemplo 4: Objeto con métodos
const myObject4 = {
    name: "Woopa",
    greet: function(){
        console.log(`${this.name} dice: Holaa!`)
    }
}

console.log('Ejemplo 4: Objeto con métodos')
myObject4.greet()
