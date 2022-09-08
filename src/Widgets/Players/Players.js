import * as React from 'react'

import { Container } from '../../Components/Container'
import { useContractData } from '../../Context/ContractContext'

export const Players = () => {
  const { players } = useContractData()

  return (
    <Container>
      <div>
        Players:
        <marquee>
          <p>{players.join(', ')}</p>
        </marquee>
      </div>
    </Container>
  )
}
