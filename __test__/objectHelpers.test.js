import { createProduct } from '../scripts/helpers/objectHelpers.ts';

test('takes an object and do the following with it, shows the id, applies functions to title and code', () => {
  expect(
    createProduct({ id: 13, code: 'St iaN', title: 'this is a test' })
  ).toStrictEqual({
    id: 13,
    code: 'ST IAN',
    title: 'this_is_a_te',
  });
});
