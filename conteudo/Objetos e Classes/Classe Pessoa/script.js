class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    getPessoa(){
        console.log("Olá, meu nome é "+ this.nome+ " e eu tenho " + this.idade + " anos.");
    }
}
//Funcionario herda da classe Pessoa, todo funcionario é uma pessoa
class Funcionario extends Pessoa{
    constructor(nome, idade,salario){
        super(nome, idade);//chama o constructor da classe Pessoa
        this.salario = salario;
    }
    getFuncionario(){
        this.getPessoa()
        console.log("meu salario e " + this.salario);
    }
}
let pessoa1 = new Pessoa("Pedro Gabriel", 18); 
let pessoa2 = new Pessoa("Ikey", 20); 
let pessoas = [pessoa1, pessoa2];
let funcionario = new Funcionario("Maria", 30, 1000000);
console.log(pessoas);
funcionario.getFuncionario();
