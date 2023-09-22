import { ImageMeme as Img } from "./Image.js";
import RestAdr, {REST_RESSOURCES} from "./constantes.js";
export function Meme(jsonConfiguredMemeStr) {
  /**
   * doc
   */
  this.imageId = -1; //this allows to make something public.
  this.texte = "";
  this.x = 25;
  this.y = 32;
  this.color = "#000000";
  this.fontSize = 50;
  this.fontWeight = "360";
  this.underline = false;
  this.italic = false;
  this.image = undefined;
  this.render = undefined;
  const insideRender = () => {
    if (undefined !== this.render && typeof this.render === "function") {
      this.render(this);
    }
  };

  /**
   * update d'un meme par objet avec force render on update
   * @param {object} memeData
   */
  this.update = function (memeData) {
    Object.assign(this, memeData);
    insideRender();
  };
  /**
   * chargement de valeurs à partir d'un meme en json
   * @param {string} jsonStr
   */

  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };

  this.save = () => {
    const tmp={...this, image:undefined};
    //delete tmp.image
    return fetch(
      `${RestAdr}${REST_RESSOURCES.memes}${
        undefined !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this),
      }
    ).then((response) => {
      return response.json();
    });/* lorsqu'il y a une seule instruction, le return n'est pas necessaire.
    On peut tout simplement écrire .then((response) => response.json());*/
  };

  if (jsonConfiguredMemeStr !== undefined) {
    this.loadFromString(jsonConfiguredMemeStr);
  }
}

//var meme = new Meme();
