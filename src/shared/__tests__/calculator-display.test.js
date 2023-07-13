import React from 'react'
import {render} from 'calculator-test-utils'
import * as themes from 'themes'
import CalculatorDisplay from '../calculator-display'

// There is no distinguishable difference between the two snapshots, which sucks. In the course, the colour and background colour were coming from the
// theme and being added into the .emotion-0 class. I cannot for the life of me get that to happen. I assume it's because the packages are just so different
test('renders dark mode', () => {
  const {container} = render(<CalculatorDisplay value="0.2" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0 emotion-1"
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
})

test('renders light mode', () => {
  const {container} = render(<CalculatorDisplay value="0.2" />, {
    theme: themes.light,
  })
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="emotion-0 emotion-1"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0.2
        </div>
      </div>
    </div>
  `)
})
