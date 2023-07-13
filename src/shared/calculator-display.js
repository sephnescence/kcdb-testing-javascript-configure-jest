import React from 'react'
import {useTheme} from '@emotion/react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'

function CalculatorDisplay({value, ...props}) {
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  const theme = useTheme()
  const DisplayContainer = styled.div(
    {
      position: 'relative',
      lineHeight: '130px',
      fontSize: '6em',
      flex: '1',
      color: theme.displayTextColor,
      background: theme.displayBackgroundColor,
    }
  )

  return (
    <DisplayContainer {...props}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </DisplayContainer>
  )
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CalculatorDisplay
