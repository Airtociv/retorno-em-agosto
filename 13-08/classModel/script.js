class Acessorio{
    constructor(nome,descricao,material,cor,botoes,preco,foto){
        this.nome= nome;
        this.descricao= descricao; 
        this.material= material;
        this.cor= cor;
        this.botoes= botoes;
        this.preco= preco;
        this.foto= foto;
    }
    calcularSubTotal(quantidade) {
        return this.preco * quantidade;
    }
}

const acessorio1 = new Acessorio("relogio fragil","relogio de pulso para uso no dia a dia","plastico emborrachado","azul","4",149.90,"images\\relogioazul.jpg");
const acessorio2 = new Acessorio("relogio solido","relogio de pulso especial","aço","dourado","1",950.00,"images\\relogiodourado.jpg");


console.log(acessorio1);
document.write("Nome: " + acessorio1.nome+ "<br><img src="+acessorio1.foto + " <br><br><br><br>")
document.write("Comprando 20 relogios o SubTotal é " + acessorio1.calcularSubTotal(20)+ " reais");
document.write("<br><br><br><br>")
console.log(acessorio2);
document.write("Nome: " + acessorio2.nome+ "<br><img src="+acessorio2.foto + " <br><br><br><br>")
document.write("Comprando 5 relogios o SubTotal é " + acessorio2.calcularSubTotal(5)+ " reais");
