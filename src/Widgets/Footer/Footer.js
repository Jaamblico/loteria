import * as React from 'react'

import { Container } from 'Components/Container'

export const Footer = () => {
  return (
    <Container>
      <a
        href={`https://rinkeby.etherscan.io/address/0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e`}
        target="blank"
      >
        View contract
      </a>
    </Container>
  )
}
