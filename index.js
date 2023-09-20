function initJs(color) {
  console.log("Show the selected color: ");
  console.log(color);
  var jsNode = document.querySelector("#is-js-loaded");
  jsNode.innerText = "Js is charged";
  jsNode.style.color = color;
  jsNode.style.textAlign = "center";
}

initJs("DarkMagenta");
