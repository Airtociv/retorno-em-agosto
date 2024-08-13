const produto1={
    nome:"camiseta esportiva",
    descricao:"camiseta de manga comprida tematica de esporte",
    preco:500.00,
    tamanho:"gg"
}

const acessorio1 = {
    nome:"relogio fragil",
    descricao:"relogio de pulso para uso no dia a dia",
    material:"plastico emborrachado",
    cor:"azul",
    botoes:"3",
    preco:149.90,
    foto: "images\\relogioazul.jpg",
    calcularSubTotal: function (quantidade) {
        return this.preco * quantidade;
    }

}

console.log(produto1,acessorio1);
document.write("Nome: " + acessorio1.nome+ "<br><img src="+acessorio1.foto + " <br><br><br><br>")
document.write("Comprando 2 produtos o SubTotal é " + acessorio1.calcularSubTotal(20)+ " reais");

