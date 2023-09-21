class ImageShort {
  w = 100; // No need to use const or var in ES6
  h;
  url;

  constructor(img) {
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
    if (undefined !== img.title && img.title.length > 2){
        this.title = img.title;
    }

    if (undefined !== img.id) {
        this.id = img.id;
    }
  }
}
