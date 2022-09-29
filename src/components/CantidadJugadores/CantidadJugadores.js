import * as React from 'react'

import * as Styled from './CantidadJugadores.styled'
import { Container } from '../Container'

export function CantidadJugadores({ jugadores }) {
  return (
    <Container>
      <Styled.CantidadJugadores>
        Cantidad Jugadores: {jugadores}
      </Styled.CantidadJugadores>
    </Container>
  )
}
