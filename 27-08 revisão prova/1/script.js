class Carro{
    constructor(marca,modelo,ano,cor){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
    }
    descreveCarro(){
        console.log("Este Carro é um " + this.modelo + " da marca " + this.marca + " modelo do ano de " + this.ano + " na cor " + this.cor + ".");
    }
}


let carro1 = new Carro("Fiat","Palio",2002,"vermelha");
carro1.descreveCarro();