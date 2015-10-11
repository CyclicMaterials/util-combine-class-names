/**
 * Returns a trimmed string of the combined class names.
 * Class names can be either strings or arrays of strings.
 *
 * Example:
 *
 *     combineClassNames(`my-class`, `my-other-class`, [`first`, `second`])
 *     // `myclass my-other-class first second`
 *
 * Arrays can be nested.
 * @param {Array|String} classNames Any number of arguments of class names.
 * @returns {String} The combined class names.
 */
function combineClassNames(...classNames) {
  return classNames.map((value) => {
    if (!value) {
      return value;
    }

    return Array.isArray(value) ?
      combineClassNames.apply(void 0, value) :
      value;
  }).join(` `).replace(/ +/g, ` `).trim();
}

export default combineClassNames;
