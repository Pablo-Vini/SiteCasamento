var nome = document.getElementById("nome")
var preco = document.getElementById("valor")
var loja = document.getElementById("loja")
var imagem = document.getElementById("espacoimagem")

var item = "jogocama"

/*
fetch('lista.json').then((response) => {
    response.json().then((dados) => {
        var lista = dados[item]
        var img = lista['imagem']

        nome.innerHTML = lista['nome']
        preco.innerHTML = lista['preco']
        loja.innerHTML = lista['loja']
        imagem.style.backgroundImage = "url(img/jogocama.jpg)"
    })
})*/

function Enviar(){
    var nome = document.querySelector('.nome')
    var valor = document.querySelector('.valor')

    if(nome.value != ""){
        alert("Obrigado " + nome.value + ", pela sua ajuda!")
        window.location.reload(true)
    }
}