import * as React from 'react'

// Styles (should not be here)
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import FontStyles from '../fontStyles'

import goblet from '../assets/images/goblet.jpeg'

// Context
import { ContractProvider } from '../Context/ContractContext'
import { useWalletContext, WalletProvider } from '../Context/WalletContext'

// Utils
import { lotteryContract } from '../services'
import { useLotteryEvents } from '../Hooks/useLotteryEvents'

// Widgets
import { BuyAction } from './BuyAction/BuyAction'
import { ConnectWallet } from './ConnectWallet/ConnectWallet'

// Components
import { Container } from '../Components/Container'
import { InfoContainer } from '../Components/InfoContainer'
import { Title } from '../Components/Title'
import { Quote } from '../Components/Quote'
import { Price } from '../Components/Price'
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
        <Price /> <AnimatedEther width="20" />
      </Container>
      {account ? <BuyAction /> : <ConnectWallet />}
      {/*}<Container>Último Ganador: {lastWinner} 🎉🎉🎉</Container>*/}

      <InfoContainer />

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
