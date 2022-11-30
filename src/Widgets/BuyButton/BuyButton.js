import * as React from 'react'
import { useContractData } from '@/context/ContractContext'
import { useWalletContext } from '@/context/WalletContext'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CHAIN_ID, CHAIN_NAME } from '@/constants'
import toast from 'react-hot-toast'
import { getGasPrice } from '@/services/lottery'

export const BuyButton = () => {
  const { buyTicket, isProcessingTx } = useContractData()
  const { wallet } = useWalletContext()
  const { network } = wallet

  React.useEffect(() => {
    if (isProcessingTx) {
      toast.loading('Comprando ticket', {
        toastId: '1',
      })
    } else {
      toast.remove('1')
    }
  }, [isProcessingTx])

  if (network.chainId !== CHAIN_ID) {
    console.log('ChainId selected', network.chainId)
    toast(
      'Por favor, cambia tu red a' + network.chain + 'para poder continuar.',
    )
    return <>Por favor, cambia tu red a {CHAIN_NAME} para poder continuar.</>
  }

  return (
    <Container>
      <Button
        id="button-container"
        name="Comprar Ticket"
        handleClick={buyTicket}
        disabled={isProcessingTx}
      />
    </Container>
  )
}
