class Aviamento{
    #nome;
    #valor;
    #departamento;
    constructor(nome,valor,departamento){
        this.#nome = nome;
        this.#valor = valor;
        this.#departamento = departamento;
    }

    obterNome(){
        return this.#nome;
    }
    obterValor(){
        return this.#valor;
    }
    obterDepartamento(){
        return this.#departamento;
    }
    obterInformativo(){
        console.log("No corredor de " +this.#departamento + " voce encontra " + this.#nome +  " pelo preço promocional de " + this.#valor + " reais")
    }
}

class Tecido extends Aviamento{
    #comprimento;
    constructor(nome,valor,departamento,comprimento){
        super(nome, departamento, valor);
        this.#comprimento = comprimento;
    }
    obterComprimento(){
        return this.#comprimento;
    }
    obterInformativo(){
        console.log("No corredor de " +this.obterDepartamento() + " voce encontra " + this.#comprimento + " de "+ this.obterNome() +  " pelo preço promocional de " + this.obterValor() + " reais")
    }
}

class Tinta extends Aviamento{
    #volume;
    #acabamento;
    constructor(nome,valor,departamento,volume,acabamento){
        super(nome, departamento, valor);
        this.#volume = volume;
        this.#acabamento = acabamento;
    }
    obterVolume(){
        return this.#volume;
    }
    obterAcabamento(){
        return this.#acabamento;
    }
    obterInformativo(){
        console.log("No corredor de " +this.obterDepartamento() + " voce encontra pote de " + this.#volume + " de "+ this.obterNome() + " " + this.#acabamento + " pelo preço promocional de " + this.obterValor() + " reais")
    }
}
