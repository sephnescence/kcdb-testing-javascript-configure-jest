1. We can configure Jest to complain about thresholds if the code coverage
   percentage drops in any of these four categories `line`, `statement`,
   `branch`, `functions`
1. This is done by adding the following to `jest.config.js`
   ```js
   module.exports = {
     coverageThreshold: {
       global: {
         statements: 100,
         branches: 100,
         lines: 100,
         functions: 100,
       },
     },
   }
   ```
1. Now when we run `npm run test:coverage`, we'll get the following errors
   ```
   Jest: "global" coverage threshold for statements (100%) not met: 31.03%
   Jest: "global" coverage threshold for branches (100%) not met: 24%
   Jest: "global" coverage threshold for lines (100%) not met: 31.25%
   Jest: "global" coverage threshold for functions (100%) not met: 29.54%
   ```
1. Obviously this case is far too extreme, but it does list the current
   percentages, so you can set the thresholds to be near their current values so
   that new code without coverage will likely cause pipelines to fail, so in
   this case, update it to the following to avoid breaking pipelines
   ```js
   module.exports = {
     coverageThreshold: {
       global: {
         statements: 29,
         branches: 22,
         lines: 29,
         functions: 27,
       },
     },
   }
   ```
1. If you have a particular file you want to set explicit thresholds for, this
   can be done like so
   ```js
   module.exports = {
       coverageThreshold: {
           global: {...},
           './src/shared/utils.js': {
               statements: 100,
               branches: 80,
               lines: 100,
               functions: 100,
           }
       },
   }
   ```
1. When you run `npm run test:coverage` again. Seemingly unexpectedly, your
   global rules now throw errors. This is because anything you explicitly
   include in `coverageThreshold` no longer counts towards `global`, so you'll
   need to update `global` accordingly. In this case,
   ```
   global: {
     statements: 25,
     branches: 13,
     lines: 26,
     functions: 27,
   },
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-14...tjs/jest-15
to see the changes made by the exercise
