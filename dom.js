//console.dir(document)
//console.log(document.domain)

//console.log(document.title);
//document.title="moj prvi sajt"
//console.log(document.all)
//console.dir(document.head)
//console.log(document.all[8])
//document.all[8].textContent="Drugi naslov"
console.log(document.forms);
console.log(document.forms[0]);

console.log(document.getElementsByClassName("list-item"));

let items = document.getElementsByClassName("list-item");
items[3].textContent = "promenio sam listu";
items[2].style.backgroundcolor = "purple";

for (let i = 0; i < items.length; i++) {
  if (i % 2 == 0) items[i].style.backgroundColor = "grey";
  else items[i].style.backgroundColor = "lightgrey";
}

console.dir(document.getElementsByClassId / "header-title");
let headerTitle = document.getElementById("header-title");
headerTitle.innerHTML = "<h3> ASD </h3>";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

//textcontent vs innertext

console.log(document.getElementsByTagName("li"));
let li = document.getElementsByTagName("li");
li[1].textcontent = "asd";
li[1].style.fontSize = "20px";
li[1].style.fontWeight = "bold";

let title = document.getElementsByClassName("title");
title[1].textContent = "nesto";

let container = document.getElementById("container");
container.style.background = "purple";

//Queryslector
let drugilink = document.querySelector("list-item");
console.log(drugilink);
drugilink.style.backgroundColor = "red";

let p = document.getElementById("sve jedno");

//QueryselectaALL
let lista = document.querySelectorAll(".list-item");
console.log(lista);

lista[2].textContent = "ne znam sta";
