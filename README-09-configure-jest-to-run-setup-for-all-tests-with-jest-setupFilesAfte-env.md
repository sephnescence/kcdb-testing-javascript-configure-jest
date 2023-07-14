1. Kent has made some extensions to expect so that the errors read a bit better.
   Otherwise you can get some intense message complaining about expected and
   received that's not really human friendly to read
1. We can do this by leveraging the setupFilesAfterEnv setting in jest
1. Run the following
   ```js
   npm i -D @testing-library/jest-dom
   ```
1. Update jest.config.js with this
   ```js
   module.exports = {
     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
   }
   ```
1. An example of new calls we have access to

   ```js
   expect(clearButton).toHaveText('Clear')
   ```

   If the text doesn't match, we'll get a much friendlier message

   ```js
   Expected element to have text content:
      ACD
   Received:
      AC
   ```

   instead of

   ```js
   expect(received).toBe(expected) // Object.is equality

   Expected: 'ACD'
   Received: 'AC'
   ```

1. There are alternative ways to do this, but they're less efficient, but also
   less magical. It just depends on your confidence with the configuration file.
   So in _each_ test you can do this
   ```js
   import * as jestDOM from '@testing-library/jest-dom'
   expect.extend(jestDOM)
   ```
1. Alternatively, in _each_ test we can just do `import
   '@testing-library/jest-dom/extend-expect'

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-08...tjs/jest-09
to see Kent's changes compared to mine
