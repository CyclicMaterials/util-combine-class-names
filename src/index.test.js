import test from 'tape';
import combineClassNames from './index';

test(`No argument returns empty string`, (assert) => {
  const expected = ``;

  assert.equal(combineClassNames(), expected,
    `Failed no argument.`);

  assert.end();
});

test(`Undefined returns empty string`, (assert) => {
  const expected = ``;

  assert.equal(combineClassNames(void 0), expected,
    `Failed undefined.`);

  assert.end();
});

test(`Null returns empty string`, (assert) => {
  const expected = ``;

  assert.equal(combineClassNames(null), expected,
    `Failed null.`);

  assert.end();
});

test(`Empty string returns empty string`, (assert) => {
  const expected = ``;

  assert.equal(combineClassNames(``), expected,
    `Failed empty string.`);

  assert.end();
});

test(`Single string returns single string`, (assert) => {
  const expected = `single`;

  assert.equal(combineClassNames(`single`), expected,
    `Failed single string.`);

  assert.end();
});

test(`Two strings returns string of arguments joined by space`, (assert) => {
  const expected = `first second`;

  assert.equal(combineClassNames(`first`, `second`), expected,
    `Failed two strings.`);

  assert.end();
});

test(`Three strings returns string of arguments joined by space`, (assert) => {
  const expected = `first second third`;

  assert.equal(combineClassNames(`first`, `second`, `third`), expected,
    `Failed three strings.`);

  assert.end();
});

test(`Many strings returns string of arguments joined by space`, (assert) => {
  const expected = `first second third fourth fifth sixth seventh`;

  assert.equal(combineClassNames(
      `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`
    ), expected,
    `Failed many strings.`);

  assert.end();
});

test(`Combined string is trimmed`, (assert) => {
  const expected = `first second`;

  assert.equal(combineClassNames(` first  `, `  second   `), expected,
    `Failed trimming.`);

  assert.end();
});

test(`Mixed strings and arrays ` +
  `returns string of flattened arrays and strings joined by space`,
  (assert) => {
    const expected = `first second third fourth`;

    assert.equal(combineClassNames(
        `first`, [`second`, `third`], `fourth`
      ), expected,
      `Failed mixed strings and arrays.`);

    assert.end();
  }
);

test(`Deeply nested arrays returns string of flattened arrays joined by space`,
  (assert) => {
    const expected = `first second third fourth fifth sixth seventh`;

    assert.equal(combineClassNames(
        [`first`, [`second`, `third`, [`fourth`, `fifth`], `sixth`], `seventh`]
      ), expected,
      `Failed deeply nested arrays.`);

    assert.end();
  }
);
