import * as React from 'react'
import { useContractData } from 'Context/ContractContext'
import { Button } from 'Components/Button'
import { Container } from 'Components/Container'

export const BuyAction = () => {
  const { buyTicket } = useContractData()

  return (
    <Container>
      <Button
        id="button-container"
        name="Comprar Ticket"
        handleClick={buyTicket}
      />
    </Container>
  )
}
