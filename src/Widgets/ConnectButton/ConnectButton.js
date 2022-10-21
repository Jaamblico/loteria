import * as React from 'react'

import { Button } from 'Components/Button'
import { Container } from 'Components/Container'
import { useWalletContext } from 'Context/WalletContext'

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
