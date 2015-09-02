function combineClassNames(...classNames) {
  return classNames.map((value) => {
    if (!value) {
      return value;
    }

    return Array.isArray(value) ?
      combineClassNames.apply(void 0, value) :
      value.trim();
  }).join(` `);
}

export default combineClassNames;
