import * as React from 'react'
import * as Styled from './Footer.styled.js'
import { Container } from 'Components/Container'
import { useContractData } from 'Context/ContractContext.js'

export const Footer = () => {
  const { addressContract } = useContractData()

  return (
    <Container>
      <Styled.Link
        href={`https://rinkeby.etherscan.io/address/${addressContract}`}
        target="blank"
      >
        Ver Contrato
      </Styled.Link>
    </Container>
  )
}
