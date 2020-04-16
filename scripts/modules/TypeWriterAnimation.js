export const TypeWriterAnimation = function (targetQuery) {
  this.targetElement = document.querySelector(targetQuery);
};

TypeWriterAnimation.prototype.addAnimation = function (collectionOfWords) {
  let count = 0;
  let index = 0;
  let currentText;
  let letter;

  (function type() {
    if (count === collectionOfWords.length) {
      count = 0;
    }

    currentText = collectionOfWords[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('#search-input-field').placeholder = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }

    setTimeout(type, 100);
  })();
};
