import * as React from 'react'
import { Button } from '../../Components/Button'
import { Container } from '../../Components/Container'
import { AnimatedEther } from '../../Components/Icons/AnimatedEther'
import { Price } from '../../Components/Price'
import { useContractData } from '../../Context/ContractContext'

export const BuyAction = () => {
  const { ticketPrice: price, buyTicket } = useContractData()

  return (
    <Container>
      <>
        <Button
          id="button-container"
          name="Comprar Ticket"
          handleClick={buyTicket}
        />
        <Price price={price} /> <AnimatedEther width="20" />
      </>
    </Container>
  )
}
