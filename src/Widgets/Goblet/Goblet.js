import * as React from 'react'

import { Container } from '@/components/Container'
import goblet from '@/assets/images/goblet.png'

export const Goblet = () => {
  return (
    <Container>
      <img src={goblet} alt="goblet" height="100px" />
    </Container>
  )
}
