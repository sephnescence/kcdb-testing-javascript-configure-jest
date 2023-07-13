1. Chrome is able to hook into usages of `debugger` in your Jest test, so if you're having trouble with a test, you can walk through it like you could in a Java debug session for example. Simply add the following to `package.json`
    ```
    {
        "scripts": {
            "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch"
        }
    }
    ```
1. When I was working through this course, I had to give up figuring out why emotion wasn't putting the color and background-color css attributes in my code. It was working in Kent's, so I can only assume that the way the code works some three years later is a bit different
1. So let's chuck `debugger` into `src/shared/__tests__/calculator-display.test.js`
    ```
    test('renders light mode', () => {
        debugger
        const {container} = render(<CalculatorDisplay value="0.2" />, {
        ...
    ```
1. Now in the terminal we run `npm run test:debug`
1. You'll see in the terminal that it's now listening on a port for you. e.g.
    ```
    Debugger listening on ws://127.0.0.1:9229/6eec0886-b479-48ac-9eeb-3a26093bf8a5
    ```
1. If you go to Chrome now and open the dev tools, you'll see a Node icon on the top left. If you hover over it you will see `Open dedicated DevTools for Node.js`. Click it and hit [Resume script execution] or hit [F8] or hit [Command + L] to catch up to your debugger statement
1. In this I can't say it was very helpful directly finding the root of the issue. As I had previously determined that the props, etc. were all coming in as expected, that the problem lay somewhere between styled and emotion. I noted that there was a hook called `useTheme` that emotion provided. That allowed me to skip passing in a second object in `styled.div` and just use `color` directly as advised in the documentation https://emotion.sh/docs/theming#usetheme
1. At any rate, my tests are now fixed up enough to tell me if my calculator is in light or dark mode!

Refer to https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-12...tjs/jest-13 to see the changes made by the exercise
