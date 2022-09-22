import * as React from 'react'

import styled from 'styled-components'

import { Button } from '../../Components/Button'
import { Container } from '../../Components/Container'
import { useContractData } from '../../Context/ContractContext'

const BuyActionContainer = styled.div`
  display: flex;
  padding: 1em 0 1em 0;
  justify-content: space-evenly;
`

export const BuyAction = () => {
  const { buyTicket } = useContractData()

  return (
    <Container>
      <BuyActionContainer>
        <Button
          id="button-container"
          name="Comprar Ticket"
          handleClick={buyTicket}
        />
      </BuyActionContainer>
    </Container>
  )
}
