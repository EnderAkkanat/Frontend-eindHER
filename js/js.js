var Audio;
var sword = new Audio();
sword.src = "sword.mp3";
//Bron code: https://www.youtube.com/watch?v=VlwSz2dXK_8 door Adam Khoury//
//Bron mp3 = https://www.zapsplat.com//

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var button = document.getElementById("klik");
var element = document.querySelector("div");

button.addEventListener("click", function() {
  element.classList.toggle("show");
});

//function formulier() {
//    var x = document.getElementById("mijnForm");
 //       if (x.style.display === "block") {
  //          //x.style.display = "none";
    //    } else {
     //       x.style.display = "block";
      //  }
   // }

//var document;
//code van: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp//

