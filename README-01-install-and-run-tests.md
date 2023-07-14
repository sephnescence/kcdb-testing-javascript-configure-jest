1. We first installed Jest with `npm i -D jest`, which installed and saved Jest
   to dev dependencies
1. We then updated `package.json:scripts` to include `"test": "jest",`, which
   will run tests for us in the terminal with any of the following:
   - `npm run test`
   - `npm test`
   - `npm t`
1. Create a file called `src/__tests__/example.ts`. The `__tests__` part of the
   path is important
1. Add the following code to that file
   ```js
   test('it works', () => {})
   ```
   Note: At the time of writing this, my IDE was complaining about the code,
   asking instead if I wanted to do `test.todo('it works')`, but that also
   required installing `@types/jest` which had 31 high level vulnerabilities. No
   thank you. Sticking to the tutorial lol
