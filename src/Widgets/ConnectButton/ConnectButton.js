import * as React from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useWalletContext } from '@/context/WalletContext'

export const ConnectButton = () => {
  const { connect, wallet } = useWalletContext()
  const { network } = wallet

  console.log('Red seleccionada: ', network?.chainId)

  return (
    <Container>
      <Button
        id="connect-wallet-button-container"
        name="Conectar Billetera"
        handleClick={connect}
      />
    </Container>
  )
}
