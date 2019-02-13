import genDiff from '../src';


test('Test 1: Json', () => {
  const beforePath = '__tests__/__fixtures__/before.json';
  const afterPath = '__tests__/__fixtures__/after.json';
  const received = genDiff(beforePath, afterPath);
  // console.log(`Мой вариант:\n ${received}`);

  const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  // console.log(`Тесты:\n ${expected}`);
  expect(received).toEqual(expected);
});
test('Test 2: Yaml', () => {
  const beforePath = '__tests__/__fixtures__/before.yml';
  const afterPath = '__tests__/__fixtures__/after.yml';
  const received = genDiff(beforePath, afterPath);
  // console.log(`Мой вариант:\n ${received}`);

  const expected = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  // console.log(`Тесты:\n ${expected}`);
  expect(received).toEqual(expected);
});
