import * as React from 'react'
import * as Styled from './Jugadores.styled'
import { useContractData } from '@/context/ContractContext'
import { Container } from '@/components/Container'

export const Jugadores = () => {
  const { players } = useContractData()

  if (players.length === 0) return null

  return (
    <Container>
      <Styled.JugadoresContenedor>
        {players.length > 0
          ? players.map((add, idx) => (
              <Styled.Jugadores key={`${add.toString()}-${idx}`}>
                {add}
              </Styled.Jugadores>
            ))
          : 'Sin jugadores...'}
      </Styled.JugadoresContenedor>
    </Container>
  )
}
