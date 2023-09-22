import { Meme } from "./Meme.js"; //Toujours à la première ligne
import { ImagesList, listeImages } from "./Image.js"; //import * as ModuleImage from from './Image.js' si je veux tout importer

/**
 * @param {Meme} meme
 */

const fillFormDatas = (meme) => {
  const formElement = document.forms["meme_form"];
  formElement["texte"].value = meme.texte;
  formElement["xtext"].value = meme.x;
  formElement["ytext"].value = meme.y;
  formElement["fw"].value = meme.fontWeight;
  formElement["fs"].value = meme.fontSize;
  formElement["fcolor"].value = meme.color;
  formElement["underline"].checked = meme.underline;
  formElement["italic"].checked = meme.italic;
};

const addFormEvents = () => {
  renderMeme(current);
  fillFormDatas(current);
  /**
   * @param {SubmitEvent} evt evt de soumission
   */

  function onformsubmit(evt) {
    evt.preventDefault();
    const promiseSave = current.save();
    promiseSave.then((obj) => {
      //On récupérère la promesse du save. Lorsqu'on la récuperera, on pourra réinitialiser l'affichage et afficher le rendu de base.
      current = new Meme();
      current.render = renderMeme;
      fillFormDatas(current);
      renderMeme(current);
    });
    console.log(current);
    //current.save();
  }
  const form = document.forms["meme_form"];
  form.addEventListener("submit", onformsubmit);

  form["texte"].addEventListener("input", (evt) => {
    current.update({ texte: evt.target.value });
  });
  form["xtext"].addEventListener("input", (evt) => {
    current.update({ x: Number(evt.target.value) });
  });
  form["ytext"].addEventListener("input", (evt) => {
    current.update({ y: Number(evt.target.value) });
  });
  form["fcolor"].addEventListener("input", (evt) => {
    current.update({ color: evt.target.value });
  });
  form["fw"].addEventListener("input", (evt) => {
    current.update({ fontWeight: Number(evt.target.value) });
  });
  form["fs"].addEventListener("input", (evt) => {
    current.update({ fontSize: Number(evt.target.value) });
  });
  form["underline"].addEventListener("change", (evt) => {
    current.update({ underline: evt.target.checked });
  });
  form["italic"].addEventListener("change", (evt) => {
    current.update({ italic: Number(evt.target.checked) });
  });
  form["image"].addEventListener("change", (evt) => {
    const id = Number(evt.target.value);
    const imagefound = listeImages.find((elementimage) => {
      return elementimage.id === id;
    });
    current.update({ imageId: id, image: imagefound });
  });
  
};

const renderMeme = (meme) => {
  /* rendu dom pour une meme*/
  console.log(meme);
  const svg = document.querySelector("svg");
  const texteElement = svg.querySelector("text");
  texteElement.innerHTML = meme.texte;
  texteElement.setAttribute("y", meme.y);
  texteElement.setAttribute("x", meme.x);
  texteElement.style.fontSize = meme.fontSize;
  texteElement.style.fontWeight = meme.fontWeight;
  texteElement.style.fill = meme.color;
  texteElement.style.textDecoration = meme.underline ? "underline" : "none";
  texteElement.style.fontStyle = meme.italic ? "italic" : "normal";

  svg.setAttribute("viewBox", `0 0 ${undefined!==meme.image ?meme.image.w:1000} ${undefined!==meme.image ?meme.image.h:1000}`);
  svg.querySelector("image").setAttribute("href", undefined!==meme.image?meme.image.url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png");
};

let current = new Meme();
current.render = renderMeme;

//console.log(meme);
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

  addFormEvents();
}
const promiseImage = listeImages.loadFromRest();
document.addEventListener("DOMContentLoaded", function (event) {
  promiseImage.then((r) => {
    loadSelectImages(listeImages);
  });

  initJS("aquamarine");
});

/**
 * Chargement de la liste des options du select en fonction de la liste d'array d'image
 * @param {ImagesList} images  liste d'image sous forme d'array ImagesListe
 */

const loadSelectImages = (images = listeImages) => {
  const select = document.querySelector("select#image");
  const noItem = select.item(0);
  /*mauvais car reconstruction dom pour tous les éléments à chaque passage dans le map.
  images.map(e=>{
    const optText='<opion value="' +e.id+'">'+e.title+'</opion>';
    select.innerHTML+=optText;
  })
  */

  select.innerHTML = "";
  select.appendChild(noItem);
  images.map((e) => {
    const optEleme = document.createElement("option");
    optEleme.value = e.id;
    optEleme.innerHTML = e.title;
    select.appendChild(optEleme);
  });
};

//window.lso = loadSelectImages;
