/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const Base = styled.progress`
  --fg-color: ${COLORS.primary};
  --bg-color: ${COLORS.transparentGray15};
  --corner-radius: ${(props) => (props.size === 'large' ? '8px' : '4px')};
  --bar-corner-left-radius: ${(props) =>
    props.size === 'large' ? '4px' : '2px'};
  --bar-corner-right-radius: ${(props) =>
    props.size === 'large'
      ? props.value >= 99.5
        ? 'var(--bar-corner-left-radius)'
        : props.value >= 99
        ? 'calc(var(--bar-corner-left-radius) - 1px)'
        : '0'
      : '0'};
  --height: ${(props) =>
    props.size === 'large' ? '24px' : props.size === 'medium' ? '12px' : '8px'};
  --bar-height: ${(props) =>
    props.size === 'large' ? '16px' : 'var(--height)'};
  --padding: ${(props) => (props.size === 'large' ? '4px' : '0')};
  appearance: none;
  -webkit-appearance: none;

  background-color: var(--bg-color);
  color: var(--fg-color);
  height: var(--height);
  border-radius: var(--corner-radius);
  border: 0;
  overflow: hidden;

  @-moz-document url-prefix() {
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-bar {
    width: 100%;
    border: 0;
    height: var(--height);
    padding: var(--padding);
    border-radius: var(--corner-radius);
    background-color: var(--bg-color);
    overflow: hidden;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }
  &::-webkit-progress-value {
    border: 0;
    height: var(--bar-height);
    border-top-left-radius: var(--bar-corner-left-radius);
    border-bottom-left-radius: var(--bar-corner-left-radius);
    border-top-right-radius: var(--bar-corner-right-radius);
    border-bottom-right-radius: var(--bar-corner-right-radius);
    background-color: var(--fg-color) !important;
  }
  &::-moz-progress-bar {
    border: 0;
    height: var(--bar-height);
    border-top-left-radius: var(--bar-corner-left-radius);
    border-bottom-left-radius: var(--bar-corner-left-radius);
    border-top-right-radius: var(--bar-corner-right-radius);
    border-bottom-right-radius: var(--bar-corner-right-radius);
    background-color: var(--fg-color) !important;
  }
`

const ProgressBar = ({ value, size }) => {
  return (
    <Base max="100" value={value} size={size}>
      {value}%
    </Base>
  )
}

export default ProgressBar
