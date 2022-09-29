import * as React from 'react'
import { Estado } from 'Components/Estado'
import { Fat } from 'Components/Fat'
import { CantidadJugadores } from 'Components/CantidadJugadores'
import { JugadoresRequeridos } from 'Components/JugadoresRequeridos'
import { useContractData } from 'Context/ContractContext'
import { formatEther } from 'utils'
import { Jugadores } from 'Widgets/Jugadores'

import * as Styled from './InfoContainer.styled'
import { Container } from 'Components/Container'

export function InfoContainer() {
  const { prize, status, numOfPlayers, playersRequired } = useContractData()

  return (
    <Container>
      <Styled.InfoContainer>
        <Fat fat={formatEther(prize)} />
        {/* <Container>
        Contract Balance: {balance} <Ether width="8" />
      </Container> */}
        <Estado estado={status ? 'Cerrado' : 'Abierto'} />
        <CantidadJugadores jugadores={numOfPlayers} />
        <Jugadores />
        <JugadoresRequeridos jugadoresRequeridos={playersRequired} />
      </Styled.InfoContainer>
    </Container>
  )
}
