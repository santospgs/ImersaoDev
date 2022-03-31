let listaFilmes =["https://www.quadrorama.com.br/wp-content/themes/quadrorama/img/moldura/?quadro=2017/07/02-2.png&m=Moldura%20preta%20de%20madeira_0","https://www.quadrorama.com.br/wp-content/themes/quadrorama/img/moldura/?quadro=2017/10/07.png&m=Moldura%20preta%20de%20madeira_0","https://www.quadrorama.com.br/wp-content/themes/quadrorama/img/moldura/?quadro=2017/10/06.png&m=Moldura%20preta%20de%20madeira_0"]

let nomesFilmes = ['Star Wars - Uma Nova Esperança','Star Wars - O Império Contra Ataca','Star Wars - O Retorno de Jedi']

let inputLink = document.getElementById('inputLink');
let inputNome = document.getElementById('inputNome');
let list = document.getElementById('list');
let msgErro = document.getElementById("msgErro")

function exibeLista(){
    for (let i = 0; i < listaFilmes.length; i++){
        list.insertAdjacentHTML("beforeend",`<li><div class='divImg'><img src='${listaFilmes[i]}'class='grow'></img><div class='overlay'><div class='text'>${nomesFilmes[i]}</div><button onclick="removeImage(${i})">X</button></div></div></li>`);
    }
}

exibeLista();

function addImage(indice){ 
	let link = inputLink.value
	let nome = inputNome.value    
	
    if (link == "" || nome == ""){
        msgErro.innerHTML = 'Preencha os campos Link e Nome';
        return;
    } else if (!(link.endsWith(".png") || link.endsWith(".jpg"))){
		msgErro.innerHTML = 'O link não é de  imagem válida';
        return;
	} else {
        //list.insertAdjacentHTML("beforeend",`<li><div class='divImg'><img src='${inputLink.value}'class='grow'></img><div class='overlay'><div class='text'>${inputNome.value}</div><button onclick="removeImage(${indice})">X</button></div></div></li>`);
        list.innerHTML = "";
        listaFilmes.push(link);
        nomesFilmes.push(nome);
        exibeLista();
    }

    msgErro.innerHTML = "";
    inputLink.value = "";
    inputNome.value = "";
}

function removeImage(indice){    
    listaFilmes.splice(indice, 1);
    nomesFilmes.splice(indice, 1);
    list.innerHTML = "";
    exibeLista();
}