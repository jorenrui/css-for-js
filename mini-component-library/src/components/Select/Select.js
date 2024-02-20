import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Base = styled.div`
  --option-width: 12ch;
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  & > select {
    width: calc(var(--option-width) + 6ch);
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.transparentGray15};
    color: inherit;

    /* Hide the default arrow icon */
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  &:hover {
    color: ${COLORS.black};
  }

  & > div {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: inherit;
    pointer-events: none;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Base style={{ '--option-width': displayedValue.length + 'ch' }}>
      <select value={value} onChange={onChange} aria-label={label}>
        {children}
      </select>
      <Icon id="chevron-down" strokeWidth={2} size={24} aria-hidden="true" />
    </Base>
  )
}

export default Select
