1. By default, Jest will run in the node environment, which is the same running the tests with `npm t -- --env=node`
1. We can skip having to pass in that flag by creating a file called `jest.config.js` and saying what environment we want there
    ```
    module.exports = {
      testEnvironment: 'jest-environment-node',
    }
    ```
1. The default environment doesn't have access to browser apis. For example, if we were to try `console.log(window)` we'd run into an exception - `ReferenceError: window is not defined`
1. To solve that, we can run `npm i -D jest-environment-jsdom` and update `jest.config.js` to point to `jsdom` instead of `node`. At the time of writing, it does have several high and critical vulnerabilities, but it is not frontend facing

Refer to https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-02...tjs/jest-03 to see Kent's changes compared to mine