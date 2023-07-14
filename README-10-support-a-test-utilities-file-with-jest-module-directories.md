**This exercise actually snuck in a second diff. See the bottom for the links.
Essentially he did another commit that added themes already**

1. Install emotion-theming
   ```js
   npm i -D @emotion/react
   ```
1. We need to create a `src/themes.js` file with the following content

   ```js
   export const dark = {
     displayTextColor: 'white',
     displayBackgroundColor: '#1c191c',
   }

   export const light = {
     displayTextColor: '#1c191c',
     displayBackgroundColor: 'white',
   }
   ```

1. We need to update `src/app.js` to include `ThemeProvider` and controls to
   toggle the theme. So what was simply

   ```js
   <Calculator />
   ```

   needs to become

   ```js
    import {ThemeProvider} from '@emotion/react'
    import * as themes from './themes'

    const [theme, setTheme] = React.useState('dark')
    const handleThemeChange = ({target: {value}}) => setTheme(value)

    <ThemeProvider theme={themes[theme]}>
        <Calculator />
        <div style={{marginTop: 30}}>
            <fieldset>
            <legend>Theme</legend>
            <label>
                <input
                onChange={handleThemeChange}
                checked={theme === 'light'}
                type="radio"
                name="theme"
                value="light"
                />{' '}
                light
            </label>
            <label>
                <input
                onChange={handleThemeChange}
                checked={theme === 'dark'}
                type="radio"
                name="theme"
                value="dark"
                />{' '}
                dark
            </label>
            </fieldset>
        </div>
    </ThemeProvider>
   ```

1. `src/shared/calculator-display.js` needs to be updated to make use of themes
   as well

   ```js
   import styled from '@emotion/styled'

   const DisplayContainer = styled.div(
       {
           position: 'relative',
           lineHeight: '130px',
           fontSize: '6em',
           flex: '1',
       },
       ({theme}) => ({
           color: theme.displayTextColor,
           background: theme.displayBackgroundColor,
       }),
   )

   <DisplayContainer {...props}>
     <AutoScalingText>{formattedValue}</AutoScalingText>
   </DisplayContainer>
   ```

1. Finally, `src/shared/__tests__/calculator-display.test.js` needs to be
   updated with `npm t -- -u`. At this point tests should pass
1. Next, we're going to do something a bit spicy. We're going to make a new
   `render` method so that our tests don't need to define and use the providers
   in every test file  
   a) Create `test/calculator-test-utils.js`. This will export the new render
   method that handles `ThemeProvider` for us. It will essentially take the
   `render` method that react testing library exposes, and wraps that all in the
   providers, calling react testing library render at the end as normal

   ```js
   import React from 'react'
   import PropTypes from 'prop-types'
   import {render as rtlRender} from '@testing-library/react'
   import {ThemeProvider} from '@emotion/react'
   import * as themes from '../src/themes'

   function render(ui, {theme = themes.dark, ...options} = {}) {
     function Wrapper({children}) {
       return <ThemeProvider theme={theme}>{children}</ThemeProvider>
     }
     Wrapper.propTypes = {
       children: PropTypes.node,
     }

     return rtlRender(ui, {wrapper: Wrapper, ...options})
   }

   export * from '@testing-library/react'
   // override the built-in render with our own
   export {render}
   ```

   b) Update `calculator-display.test.js` to use the new render method

   ```js
   import {render} from 'calculator-test-utils'
   ```

   c) Note: that import will not work, because we need to add the `test`
   directory as a module directory to webpack and jest. We've done this before,
   but for the sake of not having to look elsewhere, this is the change you need
   to add to `jest.config.js`

   ```js
   module.exports = {
     testEnvironment: [path.join(__dirname, 'test')],
   }
   ```

   and this is the change you need to add to `webpack.config.js`. Apparently we
   weren't directed to do this in the unit, but I'll do it anyways for fun

   ```js
   module.exports = {
     resolve: {
       modules: [path.join(__dirname, 'test')],
     },
   }
   ```

1. We need add this to `jsconfig.json`
   ```js
   {
       "compilerOptions": {
           "paths": {
               "*": ["test/*"]
           }
       },
       "include": ["test/*"]
   }
   ```
1. We need to install another package to have eslint use `jest.config.js` to
   figure out how to import files
   ```js
   npm i -D eslint-import-resolver-jest
   ```
   and update `.eslintrc.js` to add these to `modules.exports`
   ```js
   {
     files: ['**/__tests__/**'],
     settings: {
       'import/resolver': {
         jest: {
           jestConfigFile: path.join(__dirname, './jest.config.js'),
         },
       },
     },
   },
   ```
   This should now resolve the issues seen in the IDE regarding not being able
   to import `calculator-test-utils`
1. You might also note that the testing here is done specifically on the dark
   theme. We can allow the calculator to use the white theme by making this
   update to `calculator-test-utils`
   ```js
   function render(ui, {...options} = {}) {
   ```
   to
   ```js
   function render(ui, {theme = themes.dark, ...options} = {}) {
   ```
   This way, the theme can be passed in as a prop

Reminder that this exercise had two diffs:

1. Refer to
   https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-09...tjs/jest-10
   to see Kent's setup
1. Refer to
   https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-10...tjs/jest-11
   to see the changes made by the exercise
