import * as React from 'react'
// Styles (should not be here)
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import { Container } from '../Components/Container'
import { Ether } from '../Components/Icons/Ether'
import { Title } from '../Components/Title'
// Context
import { ContractProvider, useContractData } from '../Context/ContractContext'
import { useWalletContext, WalletProvider } from '../Context/WalletContext'
// Components
import { BuyAction } from './BuyAction/BuyAction'
import { ConnectWallet } from './ConnectWallet/ConnectWallet'
import { Players } from './Players/Players'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const MainWindow = styled.section`
  padding: 0 48px;
  width: 100vw;
  height: 100vh;
`
const Footer = styled.section``

function Root() {
  const { lastWinner, prize, status, numOfPlayers, playersRequired, address } = useContractData()

  const { account } = useWalletContext()

  return (
    <>
      <Container>
        <Title title="Lotería de Babilonia" />
      </Container>

      {account ? <BuyAction /> : <ConnectWallet />}

      <Container>Last winner: {lastWinner} 🎉🎉🎉</Container>

      <Container>
        The Fat One: {prize} <Ether width="8" />
      </Container>

      <Container>Status: {status ? 'Close' : 'Open'}</Container>

      <Container>Number of players: {numOfPlayers}</Container>

      <Container>Players required: {playersRequired}</Container>

      <Players />

      <Container>
        <Footer id="footer">
          <a href={`https://rinkeby.etherscan.io/address/${address}`} target="blank">
            View contract
          </a>
        </Footer>
      </Container>
    </>
  )
}

function Main() {
  return (
    <MainWindow id="main">
      <GlobalStyle />
      <WalletProvider>
        <ContractProvider>
          <Root />
        </ContractProvider>
      </WalletProvider>
    </MainWindow>
  )
}

export default Main
