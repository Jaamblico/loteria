import * as React from 'react'
import { Container } from '../../Components/Container'
import { useContractData } from '../../Context/ContractContext'

export const Players = () => {
  const { players } = useContractData()

  return (
    <Container>
      <div>
        Players:
        <ul>
          {players.map((playerAddress, index) => (
            <li key={`${String(playerAddress)}-${index}`}>{playerAddress}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
