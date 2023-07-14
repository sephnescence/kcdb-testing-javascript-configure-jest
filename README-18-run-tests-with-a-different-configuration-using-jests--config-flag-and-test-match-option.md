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
    `test/jest.client.js`  
    ```js
    module.exports = {
        ...require('./jest-common'),
        testEnvironment: 'jest-environment-jsdom',
        setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
        snapshotSerializers: ['jest-emotion'],
        coverageThreshold: {
            global: {
            statements: 15,
            branches: 10,
            functions: 15,
            lines: 15,
            },
            './src/shared/utils.js': {
            statements: 100,
            branches: 80,
            functions: 100,
            lines: 100,
            },
        },
    }
    ```  
    `jest.server.js`
    ```js
    const path = require('path')

    module.exports = {
        ...require('./jest-common'),
        coverageDirectory: path.join(__dirname, '../coverage/server'),
        testEnvironment: 'jest-environment-node',
        testMatch: ['**/__server_tests__/**/*.js'],
    }
    ```
1. The idea here is that you can make a new directory called `__server_tests__` if you want to have server side specific tests

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-17...tjs/jest-18
to see the changes made by the exercise
