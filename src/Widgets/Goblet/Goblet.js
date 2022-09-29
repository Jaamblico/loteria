import * as React from 'react'

import { Container } from 'Components/Container'
import goblet from 'assets/images/goblet.jpeg'

export const Goblet = () => {
  return (
    <Container>
      <img src={goblet} alt="goblet" height="100px" />
    </Container>
  )
}
