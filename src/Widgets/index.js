import * as React from 'react'

// Styles
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// Context
import { ContractProvider } from '../Context/ContractContext'
import { useWalletContext, WalletProvider } from '../Context/WalletContext'

// Utils
import { lotteryContract } from '../services'
import { useLotteryEvents } from '../Hooks/useLotteryEvents'

// Widgets
import { BuyButton } from './BuyButton'
import { Connect } from './Connect'
import { InfoContainer } from './InfoContainer'
import { Title } from './Title'
import { Quote } from './Quote'
import { Price } from '../Components/Price'
import { Footer } from './Footer'
import { Goblet } from './Goblet'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }
`

const MainWindow = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 3em;
`

function Root() {
  const { wallet } = useWalletContext()

  const { account } = wallet

  useLotteryEvents(lotteryContract)

  return (
    <>
      <Goblet />
      <Title title="Lotería de Babilonia" />
      <Quote />
      <Price />
      {account ? <BuyButton /> : <Connect />}
      <InfoContainer />
      <Footer />
    </>
  )
}

// TODO: Create HOC for WalletProvider and ContractProvider maybe?
function Main() {
  return (
    <>
      <GlobalStyle />
      <WalletProvider>
        <ContractProvider>
          <MainWindow>
            <Root />
          </MainWindow>
        </ContractProvider>
      </WalletProvider>
    </>
  )
}

export default Main
