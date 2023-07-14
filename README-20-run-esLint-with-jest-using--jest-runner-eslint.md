1. Custom Jest runners are a thing, for example `npm i -D jest-runner-eslint`
   will get you a runner that will also run lint for you! in the past I've seen
   codebases use a package called `onchange`, but this is interesting. I would
   prefer to just use the IDE format on save functionality though
1. You can then update the `lint` script in `package.json` from
   ```js
   "lint": "eslint --ignore-path .gitignore .",
   ```
   to
   ```js
   "lint": "jest --config test/jest.lint.js",
   ```
1. Similarly, we don't need to run lint when we run the `validate` script in
   `package.json`. Update
   ```js
   "validate": "npm run lint && npm run test && npm run build",
   ```
   to
   ```js
   "validate": "npm run test && npm run build",
   ```
1. We need to add this to `package.json`
   ```js
   {
       "jest-runner-eslint": {
           "cliOptions": {
           "ignorePath": "./.gitignore"
           }
       },
   }
   ```
1. If using the `projects` options in your `jest.config.js`, you'll need to add
   this

   ```js
   {
       projects: [
           './test/jest.lint.js',
       ],
   }
   ```

   and actually create `test/jest.lint.js` with the following contents

   ```js
   const path = require('path')

   module.exports = {
     rootDir: path.join(__dirname, '..'),
     displayName: 'lint',
     runner: 'jest-runner-eslint',
     testMatch: ['<rootDir>/**/*.js'],
   }
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-19...tjs/jest-20
to see the changes made by the exercise
