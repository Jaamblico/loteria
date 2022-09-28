import * as React from 'react'

import * as Styled from './Players.styled'

import { useContractData } from '../../Context/ContractContext'

export const Players = () => {
  const { players } = useContractData()

  if (players.length === 0) return null

  return (
    <Styled.PlayersContainer>
      {players?.map((add, idx) => {
        return (
          <Styled.Player key={`${add.toString()}-${idx}`}>{add}</Styled.Player>
        )
      })}
    </Styled.PlayersContainer>
  )
}
