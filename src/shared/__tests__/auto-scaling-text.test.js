import React from 'react'
import {render} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  // You can use this to debug the output
  // const { debug } = render(<AutoScalingText />)
  // debug()
  // <body>
  //     <div>
  //         <div
  //             class="autoScalingText"
  //             data-testid="total"
  //             style="transform: scale(1,1);"
  //         />
  //     </div>
  // </body>
  const {container} = render(<AutoScalingText />)

  // There are a few ways to assert a class name e.g.
  expect(container.getElementsByClassName('autoScalingText')).toHaveLength(1)
  expect(container.firstChild.classList.contains('autoScalingText')).toBe(true)
})
