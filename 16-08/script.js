class Pessoa{
    #nome;
    #idade;
    constructor(nome,idade) {
        this.#nome = nome;
        this.#idade = idade ;
    }

    obterNome(){
       return this.#nome;
    }
    obterIdade(){
        return this.#idade;
    }
    obterDescricao(){
        console.log("Nome: " + this.#nome + " Idade: " + this.#idade)
    }
}

class Funcionario extends Pessoa{
    #departamento;
    constructor(nome,idade,departamento){
        super(nome,idade);
        this.#departamento = departamento;
    }
    obterDepartamento(){
        return this.#departamento;
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() + " Idade: " + this.obterIdade() + " Departamento: " + this.#departamento)

    }
}

class Cliente extends Pessoa{
    #dataCadastro;
    constructor(nome,idade,dataCadastro){
        super(nome,idade);
        this.#dataCadastro = dataCadastro;
    }
    obterDataCadastro(){
        return this.#dataCadastro;
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() + " Idade: " + this.obterIdade() + " Data de Cadastro: " + this.#dataCadastro)
    }
}

//console.log("Nome: " + pessoa1.obterNome() + " Idade: " + pessoa1.obterIdade())
let pessoa1 = new Pessoa("Marcelo",19);
//pessoa1.obterDescricao();
let funcionario1 = new Funcionario("Barbara", 35, "Contabilidade");
//funcionario1.obterDescricao();
let cliente1 = new Cliente("Ariel",25,"14-12-2023");
//cliente1.obterDescricao();

let pessoas = [pessoa1,funcionario1,cliente1]

pessoas.forEach(pessoa => {
    pessoa.obterDescricao();
    console.log("---------");
})