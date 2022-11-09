import React from 'react'
import { ethers } from 'ethers'
import {
  LOTTERY_INITIAL_STATE,
  CHAIN_ID,
  CHAIN_NAME,
  CONTRACT_ADDRESS,
} from '@/constants'
import abi from '@/utils/Lottery.json'
import { useWalletconnect } from '@/hooks/useWalletConnect'
import { useLotteryGraphql } from './useLotteryStateGraphql'

export const useContract = () => {
  const [lotteryData, setLotteryData] = React.useState(LOTTERY_INITIAL_STATE)

  const { wallet } = useWalletconnect()

  const { library, network, setWallet } = wallet

  const { data = {}, fetching, reexecuteQuery } = useLotteryGraphql() || {}

  const getStaticInfo = () => {
    setLotteryData(state => ({
      ...state,
      ...data,
      isLoading: false,
    }))
  }

  const refreshContractData = () => {
    console.log('REFRESHING')
    setIsReloading()

    reexecuteQuery({ requestPolicy: 'network-only' })

    console.log('FINISH REFRESHING')
    setIsReloading()
  }

  const setIsReloading = () =>
    setLotteryData(state => ({
      ...state,
      isReloading: !state.isReloading,
    }))

  const setIsProcessingTx = () =>
    setLotteryData(state => ({
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
      setIsProcessingTx()
    } catch (e) {
      if (data.isProcessingTx) {
        setIsProcessingTx()
      }
      console.error(e)
    }
  }

  React.useEffect(() => {
    if (!fetching) {
      getStaticInfo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  return {
    lotteryData,
    buyTicket,
    refreshContractData,
    setIsReloading,
    setIsProcessingTx,
  }
}
