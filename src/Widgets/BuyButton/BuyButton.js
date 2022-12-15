import * as React from 'react'
import { useContractData } from '@/context/ContractContext'
import { useWalletContext } from '@/context/WalletContext'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CHAIN_ID, CHAIN_NAME } from '@/constants'
import toast from 'react-hot-toast'

export const BuyButton = () => {
  const { buyTicket, isProcessingTx } = useContractData()
  const { wallet } = useWalletContext()
  const { network } = wallet

  const toastId = React.useRef(null)

  React.useEffect(() => {
    if (isProcessingTx) {
      toastId.current = toast.loading('Comprando ticket')
    } else {
      toast.remove(toastId.current)
    }
  }, [isProcessingTx])

  if (network.chainId !== CHAIN_ID) {
    console.log('ChainId selected', network.chainId)
    toast(
      'Por favor, cambia tu red a' + network.chain + 'para poder continuar.',
    )
    return <p>Por favor, cambia tu red a {CHAIN_NAME} para poder continuar.</p>
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
