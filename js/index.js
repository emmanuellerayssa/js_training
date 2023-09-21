import {Meme} from './Meme.js' //Toujours à la première ligne
let meme =new Meme();
console.log(meme);
function ihey(color) {
  //comment on one line

  /*Comment 
    on multiple
    lines*/

  /**
   * This is the doc
   * @param {string} color chaine de valeur de coueur css
   * @return {undefined} pas de retour
   */
  console.time("timekeeper");
  console.log("Show the arguments: ");
  console.log(arguments);
  console.trace(arguments);
  console.warn(arguments);
  console.error(arguments);
  var jsNode = document.querySelector("#is-js-loaded");
  jsNode.innerText = "Js is charged";
  jsNode.style.color = color;
  jsNode.style.textAlign = "center";
  console.timeEnd("timekeeper");
}

function changePreHeader(color, nonutilise) {
  /**
   * fonction d'initialisation du bandeau js
   * @param {string}
   */
  var jsLoadNode = document.querySelector("#is-js-loaded");
  jsLoadNode.innerText = "Js is charged";
  jsLoadNode.style.color = color;
  jsLoadNode.style.textAlign = "center";
}

function initJS(color) {
  changePreHeader(color);
  document
    .querySelector("#do-not-click")
    .addEventListener("click", function (evt) {
      console.log(evt);
    });

  /**
   * @param {SubmitEvent} evt evt de soumission
   */

  function onformsubmit(evt) {
    evt.preventDefault();
    console.log(evt);
    var meme={
        texte:evt.target['texte'].value,
        x:Number(evt.target['xtext'].value),
        y:Number(evt.target['ytext'].value),
        color: evt.target['fcolor'].value,
        fontweight:evt.target['fw'].value,
        fontsize:Number(evt.target['fs'].value)

    }
    console.log(meme)
    
    // console.log('texte',evt.target['texte'].value );
    // console.log('x',evt.target['xtext'].value );
    // console.log('y',evt.target['ytext'].value );
    // console.log('color',evt.target['fcolor'].value );
    // console.log('fontweight',evt.target['fw'].value );
    // console.log('fontsize',evt.target['fs'].value );
    // //debugger;
  }
  document.forms["meme_form"].addEventListener("submit", onformsubmit);
}

document.addEventListener("DOMContentLoaded", function (event) {
  initJS("aquamarine");
});



