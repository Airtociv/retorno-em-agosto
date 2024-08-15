class Pessoa{
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade 
    }

    getPessoa(){
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " +this.idade + " anos." )
    }

}

class Funcionario extends Pessoa{
    constructor(nome,idade,salario){
        super(nome,idade);
        this.salario = salario;
    }
    getFuncionario(){
        this.getPessoa()
        console.log("e o meu salario é " + this.salario +  " reais")
    }
}


let Pessoa1 = new Pessoa("Francisco",32);
let Pessoa2 = new Pessoa("Matheus",27);
let Pessoa3 = new Pessoa("Abel",44);
let Pessoa4 = new Pessoa("Claudio",16);
let Funcionario1 =new Funcionario("Helena",38,8000.00)
let arquivo = [Pessoa1,Pessoa2,Pessoa3,Pessoa4];

console.log(arquivo);
console.log(Funcionario1);

Funcionario1.getFuncionario();