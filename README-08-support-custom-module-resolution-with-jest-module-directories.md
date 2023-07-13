1. Webpack allows you to specify module directories, which is how node_modules
   can be excluded from imports/requires
1. In this code example, if you look at webpack.config.js, you can see an entry
   called moduleDirectories. You are able to specify additional folders. For
   example, the code can load straight from node_modules, src, or shared
   ```
   module.exports = {
       resolve: {
           modules: [
               'node_modules',
               path.join(__dirname, 'src'),
               'shared'
           ],
       },
   }
   ```
1. Update jest.config.js and add the following. There will be other keys in your
   file already so don't delete them

   ```
   const path = require('path')

   module.exports = {
       moduleDirectories: [
           'node_modules',
           path.join(__dirname, 'src'),
           'shared'
       ]
   }
   ```

1. So now in the following test, the Calculator component imports
   CalculatorDisplay, but the import is simply

   ```
   import CalculatorDisplay from 'calculator-display'
   ```

   Which webpack understands, but jest doesn't utilise it, so without the change
   in the previous step, you'll get errors

   ```
   import React from 'react'
   import { render } from '@testing-library/react'
   import Calculator from '../calculator'

   test('renders', () => {
       render(<Calculator />)
   })
   ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-07...tjs/jest-08
to see Kent's changes compared to mine
