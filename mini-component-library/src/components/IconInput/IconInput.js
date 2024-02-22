import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    '--font-size': '14px',
    '--padding': '4px 16px 5px 24px',
  },
  large: {
    '--font-size': '18px',
    '--padding': '8px 16px 7px 36px',
  },
}

const ICON_SIZE = {
  small: 16,
  large: 24,
}

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};

  &:hover {
    color: ${COLORS.black};
  }

  & > div {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    transform: translateY(-50%);
    color: inherit;
  }
`

const Input = styled.input`
  --font-size: 14px;
  --padding: 4px 16px 5px 24px;

  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: var(--padding);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  width: 100%;

  ::placeholder {
    color: ${COLORS.gray500};
    opacity: 1;
    font-weight: 400;
  }

  ::-ms-input-placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  // Note: can't use React.useId, so generate a random id for now:
  const id =
    'input-' + crypto.randomUUID() + label.replace(' ', '-').toLowerCase()

  return (
    <Wrapper width={width}>
      <VisuallyHidden>
        <label id={id}>{label}</label>
      </VisuallyHidden>
      <Icon
        id={icon}
        strokeWidth={2}
        size={ICON_SIZE[size]}
        aria-hidden="true"
      />
      <Input id={id} placeholder={placeholder} style={STYLES[size]} />
    </Wrapper>
  )
}

export default IconInput
