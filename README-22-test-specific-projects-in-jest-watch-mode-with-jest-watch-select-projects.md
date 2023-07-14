1. There's a watch plugin that lets you specify which specific projects you want
   to watch. Install it with `npm i -D jest-watch-select-projects`
1. Then update `jest.common.js` (or whatever shared file your projects are
   using) with the following
   ```
   watchPlugins: ['jest-watch-select-projects'],
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-20...tjs/jest-21
to see the changes made by the exercise
