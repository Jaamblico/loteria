import * as React from 'react'

import * as Styled from './Jugadores.styled'
import { Container } from '../Container'

export function Jugadores({ jugadores }) {
  return (
    <Container>
      <Styled.Jugadores>Jugadores: {jugadores}</Styled.Jugadores>
    </Container>
  )
}
