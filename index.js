function initJs(color) {
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

initJs("DarkMagenta");
