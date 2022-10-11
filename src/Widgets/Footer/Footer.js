import * as React from 'react'
import * as Styled from './Footer.styled.js'
import { Container } from 'Components/Container'
import { useContractData } from 'Context/ContractContext.js'

export const Footer = () => {
  const { addressContract } = useContractData()

  return (
    <Container>
      <Styled.Link
        href={`https://goerli.etherscan.io/address/${addressContract}#code`}
        target="blank"
      >
        Ver Contrato
      </Styled.Link>
    </Container>
  )
}
