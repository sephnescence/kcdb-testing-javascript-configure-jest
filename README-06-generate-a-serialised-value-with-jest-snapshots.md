1. We will create a test here that uses snapshots. My favourite thing. LOL. That
   said, Kent has something amazing to show us...

   ```js
   test('renders', () => {
     const {container} = render(<CalculatorDisplay value="0" />)
     expect(container.firstChild).toMatchInlineSnapshot()
   })
   ```

1. Run `npm t` to have the snapshot generated, resulting in this code

   ```js
   expect(container.firstChild).toMatchInlineSnapshot(`
      <div
         class="css-lq9ahq-calculator-display--CalculatorDisplay"
      >
         <div
            class="autoScalingText"
            data-testid="total"
            style="transform: scale(1,1);"
         >
            0
         </div>
      </div>
   `)
   ```

1. If we were to then update the test, e.g. `value="0.2"` and run `npm t` again,
   the snapshot would fail, resulting in a `1 snapshot failed` message. We can
   update the snapshot by passing `-u` to Jest. This is done by running
   `npm t -- -u`

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-05...tjs/jest-06
to see Kent's changes compared to mine
