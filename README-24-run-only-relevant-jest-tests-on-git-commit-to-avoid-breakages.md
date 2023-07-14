1. "Similar" to running `jest --watch` (which defaults to only watching the
   tests related to file changes compared to the latest commit), you can set up
   two packages called `Husky` and `Lint Staged` to act as your final guardians
   when committing code
   ```
   npm i -D husky lint-staged
   ```
1. You need to add configuration for the both of them in `package.json`
   ```
   {
       "husky": {
           "hooks": {
               "pre-commit": "lint-staged && npm run build"
           }
       },
       "lint-staged": {
           "**/*.+(js|json|css|html|md)": [
               "prettier",
               "jest --findRelatedTests",
               "git add"
           ]
       },
   }
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-22...tjs/jest-23
to see the changes made by the exercise
