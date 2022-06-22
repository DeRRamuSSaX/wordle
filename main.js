// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];

// let randomValue = Math.trunc(Math.random() * dict.length);
//
// console.log(dict[randomValue]);
//
// for (let a = 0; a < 5; a++) {
//   let div = document.createElement("div");
//   div.textContent = a;
//   if (a % 2 == 0)
//   div.classList.add("yellow");
//   document.body.append(div);
// }
//
// //let p1 = document.getElementsById('p1');
// //p1[0].textContent = 'gatos';
//
// //console.log(dict)
// let handleClick = e => {
//   let cont = 0;
//   // console.log(e.target);
//   // alert("HOLA");
//   // console.log(document.forms);
//   for (let form of document.forms) {
//     for (let elem of form.elements) {
//       // console.log(elem);
//       // console.log(elem.dataset.correcta);
//       console.log(elem.dataset.correcta);
//       if (elem.checked && elem.dataset.correcta == "true") {
//         cont++;
//         // console.log('en el if');
//       }
//     }
//   }
//   console.log(cont);
// };

let boton = document.getElementById("boton");
let palabra = document.getElementById("palabra");
let respuesta = document.getElementById("un_div");
let i = Math.trunc(Math.random() * 10);
let correcta = dict[i];
let intentos = 0;
console.log(correcta);

function ganar() {
  console.log("Bien genio ganaste!");
}

function perder() {
  console.log("Lo siento capo perdiste");
}

function comprobar() {
  let a = 0;
  let com = palabra.value.toLowerCase();
  let div = document.createElement("div");
  respuesta.append(div);
  console.log(com);

  for (let j of com) {
  div.setAttribute("id", a);
  if (j == correcta[a]) {
    let letra = document.getElementById(a);
    let letras = document.createElement("span");
    letra.append(letras);
    letra.childNodes[a].innerHTML = j;
    letra.childNodes[a].classList.add("verde");
  }
  else if (correcta.includes(j)) {
    let letras = document.createElement("span");
    let letra = document.getElementById(a);
    letra.append(letras);
    letra.childNodes[a].innerHTML = j;
    letra.childNodes[a].classList.add("yellow");
  }
  else {
    let letras = document.createElement("span");
    let letra = document.getElementById(a);
    letra.append(letras);
    letra.childNodes[a].innerHTML = j;
    letra.childNodes[a].classList.add("gris");
  }
  a++;
  if (com == correcta) {
    ganar();
  }
  if (intentos == 6) {
  perder();
   }
 }
intentos++;
if (intentos == 6) {
  perder();
  }
}
function recargar() {
  location.reload();
}
function amarillo() {
  console.log("Letra cerca");;
}
function verde() {
  console.log("Letra Correcta");
}
function gris() {
  console.log("Letra Incorrecta");
}
