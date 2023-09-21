function Meme(jsonConfiguredMemeStr) {
  /**
   * doc 
   */
  this.imageId = -1; //this allows to make something public.
  this.texte = "";
  this.x = 25;
  this.y = 32;
  this.color="#000000"
  this.fontSize = 50;
  this.fontWeight= "360";
  this.underline = false;
  this.italic = false;

  /**
   * chargement de valeurs à partir d'un meme en json
   * @param {string} jsonStr
   */

  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };

  if(jsonConfiguredMemeStr!==undefined){
    this.loadFromString(jsonConfiguredMemeStr)
  }
}

var meme = new Meme()