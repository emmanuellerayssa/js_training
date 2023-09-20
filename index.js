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

function changePreHeader(color, nonutilise){
    /**
     * fonction d'initialisation du bandeau js
     * @param {string} 
     */
    var jsLoadNode = document.querySelector("#is-js-loaded");
    jsLoadNode.innerText = "Js is charged";
    jsLoadNode.style.color = color;
    jsLoadNode.style.textAlign = "center";
    
}

function initJS(color){
    changePreHeader(color);
    document.querySelector('#do not click').addEventListener('click', function (evt) {
        console.log(evt)
    
    })
    
}

document.addEventListener('DOMContentLoaded', function (event) {
    initJS("aquamarine");
})

