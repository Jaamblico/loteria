import * as React from 'react'
import { formatEther } from 'utils'
import * as Styled from './Price.styled'
import { useContractData } from 'Context/ContractContext'
import { Container } from 'Components/Container'
import { AnimatedEther } from 'Components/Icons/AnimatedEther'

export function Price() {
  const { price } = useContractData()

  return (
    <Container>
      <Styled.PriceContainer>
        <Styled.Price>{formatEther(price) + ' + Gas'}</Styled.Price>
      </Styled.PriceContainer>
      <AnimatedEther width="20" />
    </Container>
  )
}
