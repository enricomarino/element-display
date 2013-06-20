/**
 * element-display
 * element display
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */
 
/**
 * Expose component
 */

module.exports = function (element) {

 /**
  * show
  * show element
  *
  * @return {element} this for chaining
  * @api public
  */
 
  element.prototype.show = function () {
    this.el.style.display = 'block';
    return this;
  };

 /**
  * hide
  * hide element
  *
  * @return {element} this for chaining
  * @api public
  */
 
  element.prototype.hide = function () {
    this.el.style.display = 'none';
    return this;
  };

  return element;
};
