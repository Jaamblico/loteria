import * as React from 'react'

import * as Styled from './Estado.styled'
import { Container } from '../Container'

export function Estado({ estado }) {
  return (
    <Container>
      <Styled.Estado>Estado: {estado ? 'Cerrado' : 'Abierto'}</Styled.Estado>
    </Container>
  )
}
