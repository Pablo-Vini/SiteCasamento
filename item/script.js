const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const loja = document.getElementById("loja")
const imagem = document.getElementById("imagem")


fetch('lista.json').then((response) => {
    response.json().then((dados) => {
        const nomel = dados.nome
        
    })
})
nome.innerHTML = nomel
