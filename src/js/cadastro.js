var formProduto = document.getElementById("form-produto")
console.log("1. Form do produto", formProduto)

function cadastrarProduto(event){

    event.preventDefault()

    var produto = document.getElementById("nome-produto").value 

    var quantidade = document.getElementById("quantidade-produto").value

    var imagem = document.getElementById("imagem-produto").value
    
    console.log(produto)
    console.log(quantidade)
    console.log(imagem)

    console.log("Função cadastrarProduto chamado")
}

formProduto.addEventListener("submit", cadastrarProduto)