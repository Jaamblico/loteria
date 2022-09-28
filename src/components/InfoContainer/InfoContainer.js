import * as React from 'react'
import { Estado } from 'Components/Estado'
import { Fat } from 'Components/Fat'
import { Jugadores } from 'Components/Jugadores'
import { JugadoresRequeridos } from 'Components/JugadoresRequeridos'
import { useContractData } from 'Context/ContractContext'
import { formatEther } from 'utils'
import { Players } from 'Widgets/Players/Players'

import * as Styled from './InfoContainer.styled'

export function InfoContainer() {
  const { prize, status, numOfPlayers, playersRequired } = useContractData()

  return (
    <Styled.InfoContainer>
      <Fat fat={formatEther(prize)} />
      {/* <Container>
        Contract Balance: {balance} <Ether width="8" />
      </Container> */}
      <Estado estado={status ? 'Cerrado' : 'Abierto'} />
      <Jugadores jugadores={numOfPlayers} />
      <Players />
      <JugadoresRequeridos jugadoresRequeridos={playersRequired} />
    </Styled.InfoContainer>
  )
}
