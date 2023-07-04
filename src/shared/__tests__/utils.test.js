/*
See .babelrc.js for how we can compile modules in testing without
relying on webpack

If we weren't to do that, we'd get this error instead
> SyntaxError: Cannot use import statement outside a module
*/

import {getFormattedValue} from '../utils'

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
