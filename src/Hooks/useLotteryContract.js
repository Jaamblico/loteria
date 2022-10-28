import React from 'react'
import { ethers } from 'ethers'
import {
  LOTTERY_INITIAL_STATE,
  CHAIN_ID,
  CHAIN_NAME,
  CONTRACT_ADDRESS,
} from '@/constants'
import abi from '@/utils/Lottery.json'
import toast from 'react-hot-toast'
import { getBalance, getLotteryData } from '@/services/lottery'
import { useWalletconnect } from '@/hooks/useWalletConnect'

export const useContract = () => {
  const [data, setData] = React.useState(LOTTERY_INITIAL_STATE)

  const { wallet } = useWalletconnect()

  const { library, network, setWallet } = wallet

  const getStaticInfo = async () => {
    const balance = await getBalance() // Promise.race[]
    const lotteryData = await getLotteryData() // Promise.race[]

    setData(state => ({
      ...state,
      ...lotteryData,
      balance,
      isLoading: false,
    }))
  }

  const refreshContractData = async () => {
    await getStaticInfo()
  }

  const setIsReloading = () =>
    setData(state => ({
      ...state,
      isReloading: !state.isReloading,
    }))

  const setIsProcessingTx = () =>
    setData(state => ({
      ...state,
      isProcessingTx: !state.isProcessingTx,
    }))

  const buyTicket = async () => {
    if (network.chainId !== CHAIN_ID) {
      setWallet(s => ({
        ...s,
        error: {
          message: `Incorrect chain selected. Please change network to: ${CHAIN_NAME}`,
        },
      }))
      toast.error(
        `Incorrect chain selected. Please change network to: ${CHAIN_NAME}`,
      )
      return
    }

    if (!library) {
      return
    }

    try {
      const signer = library.getSigner()

      const lotteryContractSigned = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi.abi,
        signer,
      )

      const price = await lotteryContractSigned.getTicketPrice()

      // TODO: Add whitelist support
      if (!price) {
        return
      }

      const buyTicketTxn = await lotteryContractSigned.buyTicket({
        value: price,
        gasLimit: 300000,
      })

      console.log('Mining...', buyTicketTxn.hash)
      setIsProcessingTx()

      await buyTicketTxn.wait()

      console.log('Mined -- ', buyTicketTxn.hash)
      toast.success('Gracias por su compra!')
      setIsProcessingTx()
    } catch (e) {
      if (data.isProcessingTx) {
        setIsProcessingTx()
      }
      console.error(e)
      toast.error('No se pudo procesar la transacción')
      otherErrorNote()
    }
  }

  React.useEffect(() => {
    getStaticInfo()
  }, [])

  return {
    data,
    buyTicket,
    refreshContractData,
    setIsReloading,
    setIsProcessingTx,
  }
}
