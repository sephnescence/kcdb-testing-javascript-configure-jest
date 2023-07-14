1. You can get jest to spit out its configuration like so
   ```bash
   npx jest --showConfig
   ```
1. `globalConfig` overrides should be contained in `jest.config.js`. In Kent's
   code it looks like this

   ```js
   module.exports = {
     ...require('./test/jest-common'),
     collectCoverageFrom: ['**/src/**/*.js'],
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
     projects: ['./test/jest.client.js', './test/jest.server.js'],
   }
   ```

   `jest-common` exists in a separate file because each of the projects have
   their own config. `test/jest-common.js` in Kent's case looks like this

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
   }
   ```

   Client looks like this

   ```js
   module.exports = {
     ...require('./jest-common'),
     displayName: 'client',
     testEnvironment: 'jest-environment-jsdom',
     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
     snapshotSerializers: ['jest-emotion'],
   }
   ```

   Server looks like this

   ```js
   module.exports = {
     ...require('./jest-common'),
     displayName: 'server',
     testEnvironment: 'jest-environment-node',
     testMatch: ['**/__server_tests__/**/*.js'],
   }
   ```

   Note that `displayName` allows you to see which project picked up a test,
   otherwise there would be no label, and it can be quite confusing to debug
   what broke

For completeness, Kent had this diff between branches, but I wanted to deviate
from the path a bit and paraphrase
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-18...tjs/jest-19
