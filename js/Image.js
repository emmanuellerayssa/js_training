class ImageShort {
  #uid; // # means private
    w = 100; // No need to use const or var in ES6
  h;
  url;

  constructor(img) {
    this.#uid=Math.random
    if (undefined === img) img = {};
    if (undefined !== img.w) {
      this.w = img.w;
    }
    this.h = undefined !== img.h ? img.h : 100; //Operateur ternaire. Moins rapide qu'un if
    if (undefined !== img.url && img.url.length >= 5) {
      this.url = img.url;
    }
    //else if(){}
    else {
      this.url = "";
    }
  }
}

class ImageMeme extends ImageShort {
  //heritage
  title = "no image";
  id = undefined;
  constructor(img) {
    super(img); //We call parent constructor from the child constructor
    if (undefined !== img.title && img.title.length > 2) {
      this.title = img.title;
    } else if (
      undefined === img.title && 
      undefined !== img.url &&
      img.url.length > 5
    ) {
      this.title = img.url.slice(
        img.url.lastIndexOf("/") + 1,
        img.url.lastIndexOf(".")
      );
    }

    if (undefined !== img.id) {
      this.id = img.id;
    }
  }
}
