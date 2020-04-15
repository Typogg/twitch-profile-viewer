export const AttrApplier = function (target, attr, value, listener, event) {
  this.target = target;
  this.attr = attr;
  this.value = value;
  this.listener = listener;
  this.event = event;
};

AttrApplier.prototype.addEventListener = function () {
  const previousAttributeValue = this.target.getAttribute(this.attr);
  const newAttributeValue = `${previousAttributeValue} ${this.value}`;

  this.listener.addEventListener(this.event, () => {
    this.target.setAttribute(this.attr, newAttributeValue);
  });
};
