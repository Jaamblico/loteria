import * as React from 'react'

import * as Styled from './Players.styled'

//import { Container } from '../../Components/Container'
import { useContractData } from '../../Context/ContractContext'

export const Players = () => {
  const { players } = useContractData()

  return (
    <Styled.PlayersContainer>
      {/*Jugadores Conectados:*/}
      {players?.map((add, index) => {
        return (
          <Styled.Player key={`${add.toString()}-${index}`}>
            {add + '-'}
          </Styled.Player>
        )
      })}
    </Styled.PlayersContainer>
  )
}
