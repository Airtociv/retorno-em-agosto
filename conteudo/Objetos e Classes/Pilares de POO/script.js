class Pessoa{
    #nome;
    #idade;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }
    obterNome(){
        return this.#nome;
    }
    obterIdade(){
        return this.#idade;
    }
    obterDescricao(){
        console.log("Nome: "+ this.#nome + " Idade: "+ this.#idade);
    }
}
class Funcionario extends Pessoa{
    #departamento;
    constructor(nome, idade, departamento){
        super(nome, idade);
        this.#departamento = departamento;
    }
    obterDepartamento(){
        return this.#departamento;
    }
    obterDescricao(){
        console.log("Nome: "+ this.obterNome() + " Idade: "+ this.obterIdade() + " Departamento: "+ this.#departamento);
    }
}
class Cliente extends Pessoa{
    #dataCadastro;
    constructor(nome, idade, dataCadastro){
        super(nome, idade);
        this.#dataCadastro = dataCadastro;
    }
    obterDataCadastro(){
        return this.#dataCadastro;
    }
    obterDescricao(){
        console.log("Nome: "+ this.obterNome() + " Idade: "+ this.obterIdade() + " Data de Cadastro: "+ this.#dataCadastro);
    }
}
let pessoa1 = new Pessoa("Mateus", 35);
//pessoa1.obterDescricao();
let funcionario1 = new Funcionario("Sara", 21, "TI");
//funcionario1.obterDescricao();
let cliente1 = new Cliente("Renato", 50, "01-07-2024");
//cliente1.obterDescricao();
let pessoas =[pessoa1, funcionario1, cliente1 ]
//console.log("Nome: "+ pessoa1.obterNome()+ " Idade: "+ pessoa1.obterIdade());
pessoas.forEach(pessoa =>{
    pessoa.obterDescricao();
    console.log("-----------------------------------");
})