export const BackgroundMover = function (
  targetQuery,
  listenerQuery = targetQuery
) {
  this.targetElement = document.querySelector(targetQuery);
  this.listenerElement = document.querySelector(listenerQuery);
};

BackgroundMover.prototype.addEventListener = function (speed) {
  this.listenerElement.addEventListener('mousemove', (event) => {
    this.targetElement.style.backgroundPositionX = `${
      -event.offsetX * speed
    }px`;
    this.targetElement.style.backgroundPositionY = `${
      -event.offsetY * speed
    }px`;
  });
};
