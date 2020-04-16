export const ClassApplier = function (targetQuery, listenerQuery) {
  this.targetElement = document.querySelector(targetQuery);
  this.listenerElement = document.querySelector(listenerQuery);
};

ClassApplier.prototype.addClassApplier = function (toBeSetClass, event) {
  this.listenerElement.addEventListener(event, () => {
    const previousClasses = this.targetElement.getAttribute('class');
    const newClasses =
      previousClasses === null
        ? this.toBeSetClass
        : `${previousClasses} ${toBeSetClass}`;

    this.targetElement.setAttribute('class', newClasses);
  });
};

ClassApplier.prototype.addClassRemover = function (toBeRemovedClass, event) {
  this.listenerElement.addEventListener(event, () => {
    const previousClasses = this.targetElement.getAttribute('class');
    const newClasses = previousClasses.replace(toBeRemovedClass, '');

    this.targetElement.setAttribute('class', newClasses);
  });
};
