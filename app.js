// // let smallImages = document.getElementsByClassName("oldImg");

// // for(let i =0;i<smallImages.length;i++){
// //     console.log(smallImages[i]);
// //     console.dir(smallImages[i]);
// // }

// // changing below 3 images to above spider man image
// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

// if we want to select all 'p' tags
// document.getElementsByTagName("p")[1].innerText= "Abc";

//----- Query selector ----
//document.querySelector('p');
// above selects first p element
//document.querySelector('#myID');
// above selects first element with id = myID
//document.querySelector('.myClass');
// above selects first element with class name = myClass

// selecting  anchor tag in a div
// document.querySelector("div a");

//selecting all anchor tags in a div
// document.querySelector("div a");

// ---- innerText ----
// let para = document.querySelector("p");
// console.dir(para);
// para.innerText = "abc"; this will change para to abc on the screen
// para.innerText = "a<b>bc</b>"; this will not bold the bc
// para.innerHTML = "a<b>bc</b>"; this will bold the bc

// ----Manipulating Style -----
// obj.style
// let heading = document.querySelector("h1");
// heading.style.color= "green";
// heading.style.backgroundColor = "yellow";

// changing the anchor tags all to yelow style color inside box class anchors
// let links = document.querySelectorAll(".box a");
// for(let i =0; i<links.length;i++){
//     links[i].style.color="yellow";
// }
//we can better use for-of loop
// for(link of links){
//     link.style.color="brown";
// }

//appendChild, append , prepend
// to add element and show on screen

// Removing elements 
// removeChild(element)
// remove(element)
let box = document.querySelector(".box");
let btn = document.createElement('button');
btn.innerText = "Click me";
box.appendChild(btn);

let newP = document.createElement("p");
newP.innerText = "New p";
// above is created p but will not be visible on screen
// thereore we need to append it 
// append inside body
let body = document.querySelector("body");
body.appendChild(newP);
// this above code will take this new p to the end of screen
// lets append it in box
box.appendChild(newP);

// just like appendChild there is append
// append can append text/string inside any element
newP.append("new text added");
// and prepand which appends before an element
box.prepend(newP);
// insertAdjacentElement(where, element)
box.insertAdjacentElement("beforebegin", btn)
// box.insertAdjacentElement("afterbegin", btn)
// box.insertAdjacentElement("beforeend", btn)
// box.insertAdjacentElement("afterend", btn)