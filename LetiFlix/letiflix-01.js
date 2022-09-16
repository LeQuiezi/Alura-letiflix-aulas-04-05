/*
Neste exemplo não há "id", então não é possível utilizar "document.getElementById".
*/

/*
let filme01 = "Harry Potter e a Pedra Filosofal";
let filme02 = "O Auto da Compadecida";
let filme03 = "S.O.S - Tem um Louco Solto no Espaço";

document.write("<p>" + filme01 + "</p>");
document.write("<p>" + filme02 + "</p>");
document.write("<p>" + filme03 + "</p>");

Esta é uma maneira mais longa de adicionar o filme, mas é inviável pois sempre que eu quiser adicionar um filme, será necessário criar uma nova variável.
*/

/*Criando uma array(lista) de filmes*/


let listaFilmes = ["Harry Potter e a Pedra Filosofal", "O Auto da Compadecida", "S.O.S - Tem um Louco Solto no Espaço"];
listaFilmes.push("O Senhor dos Anéis");
listaFilmes.push("A Fantástica Fábrica de Chocolate");

    document.write("<p>" + listaFilmes + "</p>");
Os elementos irão aparecer na tela da seguinte forma: 
    "Harry Potter e a Pedra Filosofal", "O Auto da Compadecida", "S.O.S - Tem um Louco Solto no Espaço"
*/
/*
    document.write("<p>" + listaFilmes[0] + "</p>");
    document.write("<p>" + listaFilmes[1] + "</p>");
    document.write("<p>" + listaFilmes[2] + "</p>");
    document.write("<p>" + listaFilmes[3] + "</p>");
 O método acima é uma forma mais longa, abaixo está a maneira mais "simples".
*/


//   valor inicial.  condição. expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");
}
