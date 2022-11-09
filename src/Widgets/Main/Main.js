import * as React from 'react'
import styled from 'styled-components'
import { useWalletContext } from '@/context/WalletContext'
import { useLotteryEvents } from '@/hooks/useLotteryEvents'
import { BuyButton } from '@/widgets/BuyButton'
import { ConnectButton } from '@/widgets/ConnectButton'
import { InfoContainer } from '@/widgets/InfoContainer'
import { Title } from '@/widgets/Title'
import { Quote } from '@/widgets/Quote'
import { Price } from '@/components/Price'
import { Footer } from '@/widgets/Footer'
import { Goblet } from '@/widgets/Goblet'
import { Toaster } from 'react-hot-toast'

const MainContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 3em;
`

export function Main() {
  const { wallet } = useWalletContext()

  const { account } = wallet

  useLotteryEvents()

  return (
    <MainContainer>
      <Goblet />
      <Title title="Lotería de Babilonia" />
      <Quote />
      <Price />
      {account ? <BuyButton /> : <ConnectButton />}
      <Toaster position="bottom-center" duration="2000" />
      <InfoContainer />
      <Footer />
    </MainContainer>
  )
}
