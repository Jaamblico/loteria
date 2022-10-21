import * as React from 'react'
import * as Styled from './Title.styled'
import { Container } from '@/components/Container'

export function Title({ title }) {
  return (
    <Container>
      <Styled.Title>{title}</Styled.Title>
    </Container>
  )
}
