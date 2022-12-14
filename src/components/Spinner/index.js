import * as React from 'react'

import * as Styled from './Spinner.styled'

export const Spinner = () => (
  <Styled.SpinnerContainer>
    <Styled.Spinner width={50} height={50}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </Styled.Spinner>
  </Styled.SpinnerContainer>
)
