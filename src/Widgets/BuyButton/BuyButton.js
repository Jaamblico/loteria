import * as React from 'react'
import { useContractData } from 'Context/ContractContext'
import { Button } from 'Components/Button'
import { Container } from 'Components/Container'
import { useWalletContext } from 'Context/WalletContext'
import { CHAIN_ID, CHAIN_NAME } from 'services/lottery'

export const BuyButton = () => {
  const { buyTicket, isProcessingTx } = useContractData()
  const { wallet } = useWalletContext()
  const { network } = wallet

  if (network.chainId !== CHAIN_ID) {
    console.log('ChainId selected', network.chainId)
    return <>Por favor, cambia tu red a ${CHAIN_NAME} para poder continuar.</>
  }

  return (
    <Container>
      <>
        {isProcessingTx ? (
          'Comprando ticket...'
        ) : (
          <Button
            id="button-container"
            name="Comprar Ticket"
            handleClick={buyTicket}
          />
        )}
      </>
    </Container>
  )
}
