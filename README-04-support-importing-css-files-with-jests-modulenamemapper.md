1. Visual regression testing is the preferred way to test CSS, so Kent
   recommends mocking out CSS entirely
1. We started by making a test for auto scaling text
   (`src/shared/__tests__/auto-scaling-text.js`). Kent provided the body of the
   test, but the main point was to illustrate that CSS won't resolve
1. At the time of writing, Kent asked us to run
   `npm i -D @testing-library/react` as well but I got an error
   `Could not resolve dependency`, and it looked like it was related to the
   react version, which was 16 in the code that I was given. Looks like I just
   need to bump it to 18. `npm install --save react@latest` will force react to
   update past 16, as it was locked to that
1. As an aside, I'm assuming we need to do the same with `react-dom`
1. Now we can install react testing library and run tests. We got an error about
   unexpected tokens as it didn't like the css. This is where Kent suggests
   essentially hacking the build process to make css not work...
1. We used the `moduleNameMapper` option in `jest.config.js` to point css at a
   pretty empty file called `test/style-mock.js`
   ```
   moduleNameMapper: {
     '\\.css$': require.resolve('./test/style-mock.js'),
   },
   ```
   ```
   module.exports = {}
   ```
1. The tests should pass now. But to reiterate, styling is gone completely. You
   can test the dom, but to test styling you should be doing visual regression
   tests

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-03...tjs/jest-04
to see Kent's changes compared to mine
