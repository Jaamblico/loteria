import * as React from 'react'
import * as Styled from './InfoContainer.styled'
import { formatEther } from '@/utils'
import { Container } from '@/components/Container'
import { Estado } from '@/components/Estado'
import { Fat } from '@/components/Fat'
import { CantidadJugadores } from '@/components/CantidadJugadores'
import { JugadoresRequeridos } from '@/components/JugadoresRequeridos'
import { useContractData } from '@/context/ContractContext'
import { Jugadores } from '@/widgets/Jugadores'

export function InfoContainer() {
  const { prize, status, numOfPlayers, playersRequired } = useContractData()

  return (
    <Container>
      <Styled.InfoContainer>
        <Fat fat={formatEther(prize)} />
        <Estado estado={status} />
        <CantidadJugadores jugadores={numOfPlayers} />
        <Jugadores />
        <JugadoresRequeridos jugadoresRequeridos={playersRequired} />
      </Styled.InfoContainer>
    </Container>
  )
}
