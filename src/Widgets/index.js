import * as React from 'react'

// Styles (should not be here)
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import FontStyles from '../fontStyles'

import goblet from '../assets/images/goblet.jpeg'

// Context
import { ContractProvider, useContractData } from '../Context/ContractContext'
import { useWalletContext, WalletProvider } from '../Context/WalletContext'

// Utils
import { formatEther } from '../utils'
import { lotteryContract } from '../services'
import { useLotteryEvents } from '../Hooks/useLotteryEvents'

// Widgets
import { BuyAction } from './BuyAction/BuyAction'
import { ConnectWallet } from './ConnectWallet/ConnectWallet'
import { Players } from './Players/Players'

// Components
import { Container } from '../Components/Container'
import { Estado } from '../Components/Estado'
import { Title } from '../Components/Title'
import { Quote } from '../Components/Quote'
import { Price } from '../Components/Price'
import { Fat } from '../Components/Fat'
import { AnimatedEther } from '../Components/Icons/AnimatedEther'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const MainWindow = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 48px;
`
const Footer = styled.section``

function Root() {
  const {
    lastWinner,
    prize,
    status,
    numOfPlayers,
    playersRequired,
    price,
    balance,
  } = useContractData()

  useLotteryEvents(lotteryContract)

  const { account } = useWalletContext()

  return (
    <>
      <Container>
        <img src={goblet} alt="goblet" height="100px" />
      </Container>
      <Title title="Lotería de Babilonia" />
      <Quote quote="'En la realidad el número de sorteos es infinito. Ninguna decisión es final, todas se ramifican en otras.' J.L.B." />
      <Container>
        <Price price={formatEther(price) + ' + Gas'} />{' '}
        <AnimatedEther width="20" />
      </Container>
      {account ? <BuyAction /> : <ConnectWallet />}
      {/*}<Container>Último Ganador: {lastWinner} 🎉🎉🎉</Container>*/}
      <Container>
        <Fat fat={formatEther(prize)} />
      </Container>
      {/* <Container>
        Contract Balance: {balance} <Ether width="8" />
      </Container> */}
      <Container>
        <Estado estado={status ? 'Cerrado' : 'Abierto'} />
      </Container>
      <Container>Jugadores: {numOfPlayers}</Container>
      <Players />
      <Container>Jugadores Requeridos: {playersRequired}</Container>
      <Container>
        <Footer>
          <a
            href={`https://rinkeby.etherscan.io/address/0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e`}
            target="blank"
          >
            View contract
          </a>
        </Footer>
      </Container>
    </>
  )
}

// TODO Add to HOC
function Main() {
  return (
    <>
      <GlobalStyle />
      <WalletProvider>
        <ContractProvider>
          <FontStyles />
          <MainWindow>
            <Root />
          </MainWindow>
        </ContractProvider>
      </WalletProvider>
    </>
  )
}

export default Main
