var ObjectElement = require('object-element');

ObjectElement.prototype.remove = function (child) {
  child = child.OBJECT_ELEMENT ? child.element : child;
  this.element.removeChild(child);
}

/**
 * Remove all descend elements from element
 */
ObjectElement.prototype.empty = function () {
  /**
   * Do something before removing all child elements
   */
  this.triggerSync('empty');

  while (this.element.firstChild) {
    this.element.removeChild(this.element.firstChild);
  }

  /**
   * Make sure it's really empty
   */
  this.element.innerHTML = '';

  /**
   * Do something after all child elements are removed
   */
  this.trigger('emptied');
}

/**
 * Remove element itself from DOM
 * @return {Null}
 */
ObjectElement.prototype.destroy = function () {
  /**
   * Do something before removing element from DOM
   */
  this.triggerSync('destroy');

  /**
   * Remove children first
   */
  this.empty();

  /**
   * Remove itself from DOM
   */
  this.element.parentNode.removeChild(this.element);

  /**
   * Do something after element is removed from DOM
   */
  this.trigger('destroied');
}
