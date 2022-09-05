import * as React from 'react'

import { Button } from '../../Components/Button'
import { Container } from '../../Components/Container'
import { useWalletContext } from '../../Context/WalletContext'

export const ConnectWallet = () => {
  const { connectWallet, account } = useWalletContext()

  console.log('account', account)

  return (
    <Container>
      <Button id="connect-wallet-button-container" name="Connect Wallet" handleClick={connectWallet} />
    </Container>
  )
}
