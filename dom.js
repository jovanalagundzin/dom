//console.dir(document)
//console.log(document.domain)

//console.log(document.title);
//document.title="moj prvi sajt"
//console.log(document.all)
//console.dir(document.head)
//console.log(document.all[8])
//document.all[8].textContent="Drugi naslov"
/*
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
*/
//perentNode
/*let listitem = document.getElementById("items");
console.log(listitem.parentNode);

//perentelement
console.log(listitem.parentElement);
listitem.parentElement.style.backgroundColor = "red";

//childNodes
console.log(listitem.childNodes);
listitem.childNodes[1].style.backgroundColor = "purple";
console.log(listitem.childNodes[0]);

//children
console.log(listitem.children);
listitem.children[0].style.backgroundColor = "yellow";

//firstchild
console.log(listitem.firstChild); //console.log(listitem.childNodes[0])

//firstElementchild
console.log(listitem.firstElementChild); //console.log(listitem.children[0])
//lastchild
//
console.log(listitem.lastChild);
listitem.lastChild.style.backgroundColor = "blue";
listitem.lastElementChild.style.backgroundColor="gery"

//lastelementDhild (element)

//sibling
console.log(listitem.previousElementSibling)
listitem.previousElementSibling.style.backgroundColor="blue"

console.log(listitem.nextElementSibling)
listitem.nextElementSibling.style.backgroundColor="red"

let lista=document.querySelectorAll(.list-item)
console.log(lista)
lista[1].previousElementSibling.style.backgroundColor="blue"
lista[1].nextElementSibling.style.backgroundColor="lightblue"

parentElement.parentElement.style.backgroundColor="orange"
*/

let newDiv=document.createElement("div");
let textNode=document.createTextNode("Napravio sam novi element");
newDiv.appendChild(textNode);

let container=document.getElementById("container");
leth2=document.querySelector("#container h2");
container.insertBefore(newDiv,h2);

//napravi novi element
let ne znam=document.getElementById("container");
let p=document.querySelector("#ne znam p");
let newP=document.createElement("p")
let textP=document.createTextNode("nesto");
newP.appendChild(textP)
ne znam.insertBefore(newP,p)

let newitems=document.createEvent("li")
let textli=document.createTextNode("novi item")
newitems.appendChild(textNode)
let listitems=document.getElementById("items")
let li=document.querySelector(".list-items")
listitem.insertBefore(newitems,li)

let button=document.getElementById("button");
let TextBox=document.getElemen.getElementByIdtById("Textbox");
//
let addNewItemTolist=function(){
  //iscititamo text iz forme
let text=textBox.value;
//napravi novi Li
let newitems=document.createElement("li");
//napravi textnode sa tekstom koji smo iscrzali iz tekst forme 
let textli=document.createTextNode(text);
newitems.appendChild(textli));
let items=document.getElementById("items");
console.log(items.childNodes)
items.insertBefore(newli, items.lastChild.nextSibling);
}
button.addEventlistener("click",addNewItemTolist)
