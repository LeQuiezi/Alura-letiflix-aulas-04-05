/*let listaFilmes = [
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
    "https://img.elo7.com.br/product/original/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg"
]
for (let indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">")
}*/
//ADICIONAR FILMES NA TELA
function adicionarFilme () {
    //Criar uma variável para pegar os elementos que serão inseridos no input, neste caso, as URL com imagens;
    var inputFilmes = document.getElementById("input-filmes").value;

    //Escrevendo uma condição para que o programa só aceite imagens;
    if (inputFilmes.endsWith(".jpg")) {
             listarFilmesNaTela(inputFilmes)
    }
    else {
        console.error("Endereço de filme inválido");
    }
    //Igualando ao vazio, quando adicionarmos um filme o input vai "limpar" o que estiver escrito;
    document.getElementById("input-filmes").value = "";
}


//LISTAR FILMES NA TELA
function listarFilmesNaTela(inputFilmes) {
     //Para exibir a imagem colocada no input na tela;
     var imagemFilmes = "<img src=" + inputFilmes + ">";
     //Div separada exclusivamente para que tenha a exibição das capas dos filmes.
     var listaFilmes = document.getElementById("listaFilmes");
     //Abaixo o comando que irá inserir no HTML dentro do ID "listaFilmes" a "imagemFilmes"
     listaFilmes.innerHTML = imagemFilmes + listaFilmes.innerHTML;
     //Adicionando o + listaFilmes.innerHTML ele vai add os posteres um ao lado do outro;
     console.log(inputFilmes);
}