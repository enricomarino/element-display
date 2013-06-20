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
  *
  * @param {Boolean} visible visible
  * @api public
  */
 
  element.prototype.show = function () {
    this.el.style.display = 'block';
    return this;
  };
