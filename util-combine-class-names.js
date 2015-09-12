function combineClassNames(...classNames) {
  return classNames.map((value) => {
    if (!value) {
      return value;
    }

    return Array.isArray(value) ?
      value.length === 0 || combineClassNames.apply(void 0, value) :
      value.trim();
  }).join(` `);
}

export default combineClassNames;
