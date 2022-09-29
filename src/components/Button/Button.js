import * as React from 'react'
import * as Styled from './Button.styled'

export function Button({ id, name, handleClick }) {
  return (
    <Styled.ButtonContainer id={id}>
      <Styled.Button onClick={handleClick}>{name}</Styled.Button>
    </Styled.ButtonContainer>
  )
}
