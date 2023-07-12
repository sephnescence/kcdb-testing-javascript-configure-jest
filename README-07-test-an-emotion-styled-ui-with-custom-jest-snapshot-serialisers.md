1. This is specific to Emotion I feel, as it takes in css as props, but you can see this fabricated class name here is rather useless
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
                0.2
            </div>
        </div>
    `)
    ```
    There class is actually a hash of the css, so if you change it, you'll see the class name change but won't see the actual failure, which is the changed css
1. We'll need to install jest-emotion, which is a package containing a serialiser for use with jest
    ```js
    npm i -D @emotion/jest
    ```
1. Update jest.config.js and add the following. There will be other keys in your file already so don't delete them
    ```js
    module.exports = {
        snapshotSerializers: ['@emotion/jest/serializer'],
    }
    ```
1. Then run `npm t -- -u` to update your snapshots. You will see a change like this. Before
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
            0.2
        </div>
        </div>
    `)
    ```
    After
    ```js
    expect(container.firstChild).toMatchInlineSnapshot(`
        .emotion-0 {
        position: relative;
        color: white;
        background: #1c191c;
        line-height: 130px;
        font-size: 6em;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        }

        <div
        class="emotion-0"
        >
        <div
            class="autoScalingText"
            data-testid="total"
            style="transform: scale(1,1);"
        >
            0.2
        </div>
        </div>
    `)
    ```

Refer to
https://github.com/kentcdodds/jest-cypress-react-babel-webpack/compare/tjs/jest-06...tjs/jest-07
to see Kent's changes compared to mine
