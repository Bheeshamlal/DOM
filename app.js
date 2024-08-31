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
let para = document.querySelector("p");
console.dir(para);
// para.innerText = "abc"; this will change para to abc on the screen
// para.innerText = "a<b>bc</b>"; this will not bold the bc
// para.innerHTML = "a<b>bc</b>"; this will bold the bc
