import * as React from 'react'

// Styles
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

// Context
import { ContractProvider } from '@/context/ContractContext'
import { useWalletContext, WalletProvider } from '@/context/WalletContext'

// Services
import { lotteryContract } from '@/services/lottery'

// Hooks
import { useLotteryEvents } from '@/hooks/useLotteryEvents'

// Widgets
import { BuyButton } from './BuyButton'
import { ConnectButton } from './ConnectButton'
import { InfoContainer } from './InfoContainer'
import { Title } from './Title'
import { Quote } from './Quote'
import { Price } from '@/components/Price'
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
      {account ? <BuyButton /> : <ConnectButton />}
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
