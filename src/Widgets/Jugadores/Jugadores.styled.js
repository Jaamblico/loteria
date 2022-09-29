import styled from 'styled-components'

export const JugadoresContenedor = styled.div`
  width: 66vw;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Jugadores = styled.h4`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 1em;
  }
`
