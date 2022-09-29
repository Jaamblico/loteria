import * as React from 'react'
import * as Styled from './Jugadores.styled'
import { useContractData } from 'Context/ContractContext'
import { Container } from 'Components/Container'

export const Jugadores = () => {
  const { players } = useContractData()

  if (players.length === 0) return null

  return (
    <Container>
      <Styled.JugadoresContenedor>
        {players?.map((add, idx) => (
          <Styled.Jugadores key={`${add.toString()}-${idx}`}>
            {add}
          </Styled.Jugadores>
        ))}
      </Styled.JugadoresContenedor>
    </Container>
  )
}
