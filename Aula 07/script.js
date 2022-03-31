let bodyBG = [
    "https://pbs.twimg.com/media/FNRwhr8WQAIHERH?format=jpg",
    "https://pbs.twimg.com/media/FNRwhr-WQAA5pfy?format=jpg",
    "https://pbs.twimg.com/media/EtaPhLkXcAENHlf.jpg",
    "https://i.pinimg.com/originals/d9/b1/1d/d9b11d75134f15857b895777ea525c13.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/035/521/523/large/david-freeman-page8artstatiobn.jpg?1615197529"
];

let carta1 = {
    nome: "Batman",
    img: "https://2.bp.blogspot.com/-Gb-7HYEus2E/XGdQfOq93qI/AAAAAAAAHgU/wTa4qUNCzxEK9nqGXcg5pERazTYWiXArwCLcBGAs/s1600/1495749349batman-hd-cartoon-clipart-png.png",
    atributos: {
        força: 2,
        velocidade: 3,
        habilidade: 5,
        equipamento: 6,
        inteligencia: 6,
    },
};

let carta2 = {
    nome: "Superman",
    img: "https://comicvine.gamespot.com/a/uploads/scale_medium/11132/111329151/6571090-4088955-9091748813-31970.png",
    atributos: {
        força: 6,
        velocidade: 6,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 4,
    },
};

let carta3 = {
    nome: "Flash",
    img: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Flash-PNG.png",
    atributos: {
        força: 6,
        velocidade: 6,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 5,
    },
};

let carta4 = {
    nome: "Wonder Woman",
    img: "https://clipart.world/wp-content/uploads/2020/08/animated-wonder-woman-transparent.png",
    atributos: {
        força: 5,
        velocidade: 5,
        habilidade: 5,
        equipamento: 3,
        inteligencia: 4,
    },
};

let carta5 = {
    nome: "Supergirl",
    img: "https://i.pinimg.com/originals/81/b7/0d/81b70d1b3665cddec9ddbcc738a86784.png",
    atributos: {
        força: 5,
        velocidade: 4,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 3,
    },
};

let carta6 = {
    nome: "Aquaman",
    img: "https://www.pikpng.com/pngl/b/321-3218469_jl-by-alexbadass-justice-league-the-animated-series.png",
    atributos: {
        força: 5,
        velocidade: 4,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 3,
    },
};

let carta7 = {
    nome: "Lobo",
    img: "https://static.wikia.nocookie.net/vsbattles/images/0/03/Render_Lobo_DCAU.gif",
    atributos: {
        força: 5,
        velocidade: 4,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 3,
    },
};

let carta8 = {
    nome: "Joker",
    img: "https://www.pngkey.com/png/full/56-568482_the-joker-by-dawidarte-joker-cartoon.png",
    atributos: {
        força: 5,
        velocidade: 4,
        habilidade: 4,
        equipamento: 2,
        inteligencia: 3,
    },
};

let cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
//let cartas = [carta1, carta7];
let elementoResultado = document.getElementById("resultado");
let cartaMaquina;
let cartaJogador;

function sortearCarta() {   
     
    virarCard();
    exibeElemento(mostrar = 0);   

    document.body.style.backgroundImage = `url('${bodyBG[parseInt(Math.random() * bodyBG.length)]}')`;
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }

    cartaJogador = cartas[numeroCartaJogador]; 

    document.getElementById("nomeCarta").innerHTML = `<p style="color:white">${cartaJogador.nome}</p>`;
    document.getElementById("imgCarta").innerHTML = `<img src="${cartaJogador.img}" height="200px">`;

    exibirOpcoes();
}

function exibirOpcoes() {
    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" id="atributos" value="${atributo}"> ${atributo}<br>`;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    if (radioAtributos.checked == false) {
        console.error("selecione atributo");
    } else {
        for (let i = 0; i < radioAtributos.length; i++) {
            if (radioAtributos[i].checked == true) {
                return radioAtributos[i].value;
            }
        }
    }
}

function jogar() {

    let atributoSelecionado = obtemAtributoSelecionado();
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    document.getElementById("nomeCartaMaquina").innerHTML = `<p style="color:white">${cartaMaquina.nome}</p>`;
    document.getElementById("imgCartaMaquina").innerHTML = `<img src="${cartaMaquina.img}" height="200px">`;    
    document.getElementById("atributoCartaMaquina").innerHTML = `<p style="color:white">${atributoSelecionado} : ${valorCartaMaquina}</p>`; 
    
    document.getElementById("atributoCartaJogador").innerHTML = `<p style="color:white">${atributoSelecionado} : ${valorCartaJogador}</p>`;  

    elementoResultado.style.display = "initial";

    if (valorCartaJogador == undefined) {
        elementoResultado.innerHTML = `<p>Selecione</br>um atributo!</p>`;
    } else {
        virarCardMaquina();
        
        if (valorCartaMaquina > valorCartaJogador) {
            elementoResultado.innerHTML = `<p>Você perdeu!</p>`;
        } else if (valorCartaJogador > valorCartaMaquina) {
            elementoResultado.innerHTML = `<p>Você ganhou!</p>`;
        } else {
            elementoResultado.innerHTML = `<p>Empate!</p>`;
        }
        exibeElemento(mostrar=1);

        setTimeout(() => {
            virarCard();
            virarCardMaquina();
            document.getElementById("btnSortear").disabled = false;
            document.getElementById("resultado").style.display = "none";
         }, 3000);
    }    
}

function virarCard() {
    let element = document.getElementById("cardJogador");

    if (element.className === "cardJogador") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
}

function virarCardMaquina() {
    let element = document.getElementById("cardMaquina");      

    if (element.className === "cardMaquina") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";            
        } else {
            element.style.transform = "rotateY(180deg)";            
        }
    }
}

function exibeElemento(){

    if (mostrar == 0){
        document.getElementById("atributoCartaJogador").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        document.getElementById("opcoes").style.visibility = "visible";
        document.getElementById("escolhaText").style.visibility = "visible";
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;
    } else if (mostrar == 1){
        document.getElementById("atributoCartaJogador").style.display = "initial";
        document.getElementById("btnJogar").disabled = true;        
        document.getElementById("opcoes").style.visibility = "hidden";
        document.getElementById("escolhaText").style.visibility = "hidden";
    }
}

