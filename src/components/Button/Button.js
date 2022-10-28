import * as React from 'react'
import * as Styled from './Button.styled'

export function Button({ id, name, handleClick, disabled }) {
  return (
    <Styled.ButtonContainer id={id}>
      {!disabled ? (
        <Styled.Button onClick={handleClick}>{name}</Styled.Button>
      ) : (
        <Styled.Button>{name}</Styled.Button>
      )}
    </Styled.ButtonContainer>
  )
}
