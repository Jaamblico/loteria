import * as React from 'react'
import * as Styled from './Footer.styled.js'
import { Container } from '@/components/Container'
import { useContractData } from '@/context/ContractContext.js'
import { CHAIN_NAME } from '@/constants'

export const Footer = () => {
  const { addressContract } = useContractData()

  return (
    <Container>
      <Styled.Link
        href={`https://${CHAIN_NAME}.etherscan.io/address/${addressContract}#code`}
        target="blank"
      >
        Ver Contrato
      </Styled.Link>
    </Container>
  )
}
