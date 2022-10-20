import * as React from 'react'
import { useContractData } from 'Context/ContractContext'
import { Button } from 'Components/Button'
import { Container } from 'Components/Container'

export const BuyButton = () => {
  const { buyTicket, isReloading } = useContractData()

  console.log({ isReloading })

  return (
    <Container>
      <>
        {isReloading ? (
          'Comprando ticket...'
        ) : (
          <Button
            id="button-container"
            name="Comprar Ticket"
            handleClick={buyTicket}
          />
        )}
      </>
    </Container>
  )
}
