// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'siete',
  'arbol',
  'nueve',
  'mirko'
];

let randomValue = Math.trunc(Math.random() * dict.length);

console.log(randomValue);
console.log(dict[randomValue]);

for (let a = 0; a < 5; a++) {
  let div = document.createElement("div");
  div.textContent = a;
  if (a % 2 == 0)
  div.classList.add("yellow");
  document.body.append(div);
}


//let p1 = document.getElementsById('p1');
//p1[0].textContent = 'gatos';

//console.log(dict)
let handleClick = e => {
  let cont = 0;
  // console.log(e.target);
  // alert("HOLA");
  // console.log(document.forms);
  for (let form of document.forms) {
    for (let elem of form.elements) {
      // console.log(elem);
      // console.log(elem.dataset.correcta);
      console.log(elem.dataset.correcta);
      if (elem.checked && elem.dataset.correcta == "true") {
        cont++;
        // console.log('en el if');
      }
    }
  }
  console.log(cont);
};
