import * as React from 'react'
import { useContractData } from '@/context/ContractContext'
import { useWalletContext } from '@/context/WalletContext'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CHAIN_ID, CHAIN_NAME } from '@/constants'

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
