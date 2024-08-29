class Forma{
    calculoDeArea(){

    }
}
class Quadrado extends Forma{
    constructor(lado){
        super()
        this.lado = lado
    }
    calculoDeArea(){
        return this.lado*this.lado
    }
}
class Circulo extends Forma{
    constructor(raio){
        super()
        this.raio = raio
    }
    calculoDeArea(){
        return 3.14 *(this.raio*this.raio)
    }
}

const circulo = new Circulo(3)
const quadrado = new Quadrado(4)
console.log("a area do circulo é " + circulo.calculoDeArea())
console.log("a area do quadrado é " + quadrado.calculoDeArea())