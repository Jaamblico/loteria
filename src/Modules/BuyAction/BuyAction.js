import * as React from 'react'

import styled from 'styled-components'

import { Button } from '../../Components/Button'
import { Container } from '../../Components/Container'
import { AnimatedEther } from '../../Components/Icons/AnimatedEther'
import { Price } from '../../Components/Price'
import { useContractData } from '../../Context/ContractContext'

const BuyActionContainer = styled.div`
  display: flex;
  padding: 1em 0 1em 0;
  justify-content: space-evenly;
`

export const BuyAction = () => {
  const { price, buyTicket } = useContractData()

  return (
    <Container>
      <BuyActionContainer>
        <Button id="button-container" name="Comprar Ticket" handleClick={buyTicket} />
        <Price price={price} /> <AnimatedEther width="20" />
      </BuyActionContainer>
    </Container>
  )
}
