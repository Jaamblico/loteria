import * as React from 'react'
import * as Styled from './Fat.styled'
import { Container } from '../Container'
import { Ether } from '../Icons/Ether'

export function Fat({ fat }) {
  return (
    <Container>
      <Styled.Fat>Pozo: {fat}</Styled.Fat>
      <Ether width="8" />
    </Container>
  )
}
