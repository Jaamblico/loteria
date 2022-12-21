import * as React from 'react'
import * as Styled from './Footer.styled.js'
import { Container } from '@/components/Container'
import { CHAIN_NAME, CONTRACT_ADDRESS } from '@/constants'

export const Footer = () => {
  return (
    <Container>
      <Styled.Link
        href={`https://${CHAIN_NAME}.etherscan.io/address/${CONTRACT_ADDRESS}#code`}
        target="blank"
      >
        Ver Contrato
      </Styled.Link>
    </Container>
  )
}
