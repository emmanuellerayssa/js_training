function Meme() {
  /**
   * doc 
   */
  this.texte = "texte du meme"; //this allows to make something public.

  var _imageId = 0; // _imageId is private thus, not accessible from outside the function
  this.getImageId=function () {
    return _imageId;
  }
  function _changeImage(imageId) {
    console.log("change image fn called");
    _imageId = imageId;
  }

  this.changeImage=_changeImage; //Attach a private function to a public one

  console.log("Meme called", this.texte);
  _changeImage(25);
  console.log(_imageId);
}

var meme = new Meme()