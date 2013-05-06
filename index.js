/**
 * Element
 * Element overlay component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Element`
 */

module.exports = Element;

/**
 * Element
 */

function Element(el){
  this.el = el;
};

/**
 * overlay
 *
 * @param {Boolean} visible visible
 * @api public
 */

Element.prototype.overlay = function (visible) {
  return this;
};
