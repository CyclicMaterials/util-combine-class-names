
# CyclicMaterials util-combine-class-names API

- [`combineClassNames`](#combineClassNames)

### <a id="combineClassNames"></a> `combineClassNames(classNames)`

Returns a trimmed string of the combined class names.
Class names can be either strings or arrays of strings.

Example:

    combineClassNames(`my-class`, `my-other-class`, [`first`, `second`])
    // `myclass my-other-class first second`

Arrays can be nested.

#### Arguments:

- `classNames :: Array|String` Any number of arguments of class names.

#### Return:

*(String)* The combined class names.

- - -

