1. You can run jest in watch mode, which will allow you to monitor tests that
   will get affected by files you've changed since the last commit. If it
   doesn't exist already in `package.json`, add this in
   ```
   {
       "scripts": {
           "test:watch": "jest --watch",
       }
   }
   ```
1. When running jest in watch mode, you can interact with it by pressing keys to
   do things like regex filtering on files, test only previously broken tests
   when isolating a specific test to fix, etc. The console will let you know
   which keys you can press
1. Apparently, you can hit unlisted keys to interrupt tests at any time

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-01...tjs/jest-12
to see the changes made by the exercise
