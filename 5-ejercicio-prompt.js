/*
Crea tu propia historia interactiva
Construir una pequeña historia en la que los personajes, los lugares,  los objetos, etc sean variables. Así, si cambiáis el valor de la variable, la historia cambiará automáticamente.
Instrucciones:
Piensa en una historia corta y sencilla. Por ejemplo, la historia de un mago que encuentra un tesoro en un bosque.
Ahora, identifica los elementos de tu historia que pueden ser variables. Algunos ejemplos: el nombre del personaje principal, el lugar donde ocurre la historia, el objeto que el personaje encuentra, y un sentimiento que experimente.
Declara todas esas variables usando let y un const, asignándoles un valor utilizando la función prompt() para solicitarlo al usuario.
Ahora, es el momento de usar la concatenación. Construye una variable que una todas las variables que has creado con la forma más moderna de hacerlo que es con el backtick (`) y el signo de dólar.
Por último, usa document.write() para imprimir tu historia en el navegador y ver cómo ha quedado.
. Una vez que la historia esté lista y la hayas visto en la página, recarga la página para que se te soliciten nuevos valores y veas cómo la historia cambia por completo.

*/

const NOMBRE=prompt("¿Quién eres tú?");
let ciudad=prompt("Ciudad donde vive tu personaje")
let animal=prompt("El animal que te va a representar es un/una:");
let princesa=prompt("Elije el nombre de la princesa a la que tendrás que salvar");
let enemigo=prompt("El nombre del malo");
let castillo=prompt("Nombre del castillo donde está encerrada la princesa");

let lucha=prompt("De qué tipo de combate eres experto");
let objeto=prompt("Nombre del objeto con el que te defenderás en tu combate");


let resultado1= `<div 
font-family:Arial;
style="width:300px; twidth: 300px;
text-align: justify;
font-size: 1.6em;
margin:0 auto;
margin-top: 50px;
padding:5%;
background-color:#f5f5f5;
color: #333;
border-radius:10px;
">Eres <b>${NOMBRE}</b>, el guerrero más feroz del reino de <b>${ciudad}</b>. A pesar de ser un/a <b>${animal}</b>, eres muy listo/a, y eso despertó la envidia de <b>${enemigo}</b>, quién se vió frustrado por no llegar a su intelecto y grandeza. Un día secuestró a la princesa <b>${princesa}</b>, y se la llevó al castillo de <b>${castillo}</b>. Nuestro valiente amigo <b>${NOMBRE}</b>, dándose cuenta de lo ocurrido, decidió enfrentarse a <b>${enemigo}</b>.Nuestro héroe <b>${NOMBRE}</b>, el/la <b>${animal}</b> , una vez  hubo llegado hasta <b>${castillo}</b>, le propuso a <b>${enemigo}</b> un combate de <b>${lucha}</b>.<b> ${enemigo}</b> aceptó y para esa lucha, nuestro amigo eligió el/la <b>${objeto}</b>. Cuando <b>${enemigo}</b> vió la destrza de <b>${NOMBRE}</b> con <b>${objeto}</b>, <b>${enemigo}</b> dió un paso atrás y salió huyendo. Entre otra cosas porque es subnormal.<div>`;

document.writeln (resultado1);




