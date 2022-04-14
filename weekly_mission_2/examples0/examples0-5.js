//Ejemplo 5: Objeto con método que recibe parametros

const myObject5 = {
    name: "Axos",
    sayHelloToMyPet: function(pet){
        console.log(`${this.name} say's hello to ${pet}`)
    }
}
console.log("Ejemplo 5: Objeto con método que recibe parametros")
myObject5.sayHelloToMyPet("Woopa")

