1. If your codebase has frontend and backend code, you can configure two jest
   suites essentially. I'm not going to do that right now, but refer to
   https://testingjavascript.com/lessons/jest-run-tests-with-a-different-configuration-using-jest-s-config-flag-and-testmatch-option
   in the future if I need to do it
1. Essentially you'll end up with files like this...  
    `test/jest-common.js`  
    ```js
    const path = require('path')

    module.exports = {
    rootDir: path.join(__dirname, '..'),
    moduleDirectories: [
        'node_modules',
        path.join(__dirname, '../src'),
        'shared',
        path.join(__dirname),
    ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./style-mock.js'),
    },
    collectCoverageFrom: ['**/src/**/*.js'],
    }
    ```  
    `test/jest.server.js`  
    ```js
    echo
    ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-17...tjs/jest-18
to see the changes made by the exercise
