1. We created a test for the `utils` class, called
   `src/shared/__tests__/utils.test.js`. I added the `.test` in there myself as
   it's common practice in most codebases I've worked with anyways
1. The example we were told to use had an `import` statement, which isn't
   something that JS does off the bat. The fix is explained later

   ```js
   import { getFormattedValue } from '../utils'

   test('formats the value', () => {
       expect(getFormattedValue('1234.0')).toBe('1,234.0')
   })
   ```

1. We edited `.babelrc.js` to allow for modules to be compiled when running
   tests. Outside of tests, we'll let webpack do the compiling, but this way, we
   don't need to involve webpack, and can just enjoy that jest refers to babel
   when running
   ```js
   const isTest = String(process.env.NODE_ENV) === 'test'
   ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}]
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-01...tjs/jest-02
to see Kent's changes compared to mine
