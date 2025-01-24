let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2} )
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto")
    exibirTextoNaTela("p", "Escolha um Número Entre 1 e 10")
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector ("input").value
    
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? "Tentativas" :"Tentativa"
        let mensagemTentativas = "Você Acertou o Número Secreto com " + tentativas + " " + palavraTentativas
        exibirTextoNaTela("h1", "Acertou!")
        exibirTextoNaTela("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }

    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O Número Secreto é Menor que (" + chute + ")")
        }

        else {
            exibirTextoNaTela("p", "O Número Secreto é Maior que (" + chute + ")")
        }

        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt (Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    }

    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector("input")
    chute.value = ""
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}