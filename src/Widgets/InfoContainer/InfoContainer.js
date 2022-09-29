import * as React from 'react'
import * as Styled from './InfoContainer.styled'
import { formatEther } from 'utils'
import { Container } from 'Components/Container'
import { Estado } from 'Components/Estado'
import { Fat } from 'Components/Fat'
import { CantidadJugadores } from 'Components/CantidadJugadores'
import { JugadoresRequeridos } from 'Components/JugadoresRequeridos'
import { useContractData } from 'Context/ContractContext'
import { Jugadores } from 'Widgets/Jugadores'

export function InfoContainer() {
  const { prize, status, numOfPlayers, playersRequired } = useContractData()

  return (
    <Container>
      <Styled.InfoContainer>
        <Fat fat={formatEther(prize)} />
        <Estado estado={status ? 'Cerrado' : 'Abierto'} />
        <CantidadJugadores jugadores={numOfPlayers} />
        <Jugadores />
        <JugadoresRequeridos jugadoresRequeridos={playersRequired} />
      </Styled.InfoContainer>
    </Container>
  )
}
