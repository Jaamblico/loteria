import * as React from 'react'
import * as Styled from './JugadoresRequeridos.styled'
import { Container } from '../Container'

export function JugadoresRequeridos({ jugadoresRequeridos }) {
  return (
    <Container>
      <Styled.JugadoresRequeridos>
        Jugadores Requeridos: {jugadoresRequeridos}
      </Styled.JugadoresRequeridos>
    </Container>
  )
}
