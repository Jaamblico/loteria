import styled from 'styled-components'

export const PlayersContainer = styled.div`
  width: 900px;
  white-space: nowrap;
  overflow-y: hidden;
  height: 1em;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Player = styled.div`
  display: inline-block;
`
