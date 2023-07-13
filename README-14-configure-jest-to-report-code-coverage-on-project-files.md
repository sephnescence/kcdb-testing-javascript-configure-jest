1. We can configure Jest to provide us with a coverage report! Add the following
   to `package.json` to get started
   ```
   {
       "scripts": {
           "test:coverage": "jest --coverage",
       }
   }
   ```
   Kent put his `--coverage` flag on `test` but I want it to be separate
1. Now when we run `npm run test:coverage`, it will generate a folder called
   `coverage`. It's best to add this directory to `.gitignore`, and probably
   `.dockerignore` if the codebase had one
1. We'll have a file called `coverage/lcov-report/index.html` that we can open
   in our browsers. Running the following in terminal will work -
   `open coverage/lcov-report/index.html`. Feel free to add that to your aliases
   in your shell. e.g. `.bashrc` for bash
1. You'll notice that the `test` directory gets reported on, which isn't a true
   reflection of your coverage as it will always be 100%. So we'll need a way to
   let Jest know which folders to run coverage on. Add the following to
   `jest.config.js`
   ```
   module.exports = {
       collectCoverageFrom: ['**/src/**/*.js'],
   }
   ```
   Additionally, this forces Jest to report on files it didn't discover during
   test running, so will now pick up files with 0% coverage
1. Now when you run `nom run test:coverage` is should ignore the `test`
   directory
1. If you're interested to learn how Jest does this coverage. You'll find an
   explanation on
   https://testingjavascript.com/lessons/jest-analyze-jest-code-coverage-reports.
   Alternatively, read up on Babel Istanbul
1. An interesting gotcha, people can annotate the code with this to ignore it in
   the coverage report. I'm not sure if there's an eslint rule to prevent this
   ```
   /* istanbul-ignore-next */
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-13...tjs/jest-14
to see the changes made by the exercise
