let jogadores = [];

function calculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function exibeJogadores(jogadores){
    let elemento = "";
    for (var i = 0; i < jogadores.length; i++ ){
        elemento += `<tr>
        <td><img src="${jogadores[i].imagem}" width="50px"></td>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>`;
    }   
    
    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadores(jogadores);

function adicionarVitoria(indice){
    let jogador = jogadores[indice];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarEmpate(indice){
    let jogador = jogadores[indice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);        
}

function adicionarDerrota(indice){
    let jogador = jogadores[indice];
    jogador.derrotas++;
    exibeJogadores(jogadores);
}

function zerarPontos(){
    for (let i = 0; i < jogadores.length; i++){
        let jogador = jogadores[i]
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.pontos = calculaPontos(jogador)
        exibeJogadores(jogadores)
    }
}

function addJogador(){
    const imagem = document.getElementById("imagem").value;
    const nome = document.getElementById("nome").value;
    const erro = document.getElementById("erro");
    
    if (imagem == "" || nome == ""){        
        erro.innerHTML = "Informe link e nome"
    } else if (!((imagem.endsWith(".jpg")) || (imagem.endsWith(".png")))){
        erro.innerHTML = "Link inválido"
    } else {
        let jogador = {imagem:imagem,nome:nome, vitorias:0, empates:0, derrotas:0, pontos:0};        
        jogador.pontos = calculaPontos(jogador)
        jogadores.push(jogador)

        exibeJogadores(jogadores)

        document.getElementById("imagem").value = "";
        document.getElementById("nome").value = "";
        erro.innerHTML = "";
    }
    
}

