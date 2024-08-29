class Casa{
    //atributos casa
    constructor(proprietario, rua, bairro, cidade, numero){
        this.proprietario = proprietario;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.numero = numero;
    }
    getCasa(){
        console.log("O proprietário e:"+this.proprietario);
    }
    venda(novoProprietario){
        this.proprietario = novoProprietario;
    }
}

let casa1 = new Casa("Isabel", "Margaridas", "Jardim Limoeiro", "Praia Grande", 85);
casa1.getCasa();
casa1.venda("Raquel");
casa1.getCasa();

