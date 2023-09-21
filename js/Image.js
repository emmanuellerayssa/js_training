class ImageShort {
  #uid; // # means private
  w = 100; // No need to use const or var in ES6
  h;
  url;

  /**
   *
   * @param {*Object}
   */

  constructor(img = {}) {}

  /**
   * Getter de #uid
   */
  get uid() {
    return this.#uid;
  }

  /**
   * Setter de #uid
   */
  set uid(value) {
    this.#uid = value;
  }
  getRatioWH() {
    return this.w / this.h;
  }
}

export class ImageMeme extends ImageShort {
  //heritage
  title = "no image";
  id = undefined;
  constructor(img = {}) {
    //if (unefined=== img) img = {};
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

export class ImagesList extends Array {
  loadFromRest() {
    fetch("http://localhost:5679/images")
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        console.log(arr, this);
        this.splice(0);
        // arr.map((element, position, liste) => { // On peut remplacer map par forEach. map permet de récupérer le retour sous forme de var et forEach non
        //   console.log(element, position, liste);
        //   this.push(element);
        //   console.log(this);
        // });
            this.push(...arr); //Spread operator permet de gérer les éléments d'un objet un par un
            console.log(this);
      });
  }
}

export const listeImages = new ImagesList();
listeImages.loadFromRest();
