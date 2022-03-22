import {
  limitLength,
  makeUppercase,
  replaceSpaces,
} from '../scripts/helpers/stringHelpers.ts';

test('makes the text uppercase', () => {
  expect(makeUppercase('Stian')).toBe('STIAN');
});

test('Replaces spaces with _', () => {
  expect(replaceSpaces('hello there')).toBe('hello_there');
});

test('Retains the first three letters in the word', () => {
  expect(limitLength(3, 'Stian')).toBe('Sti');
});
