import React from 'react'
import { LOTTERY_INITIAL_STATE } from '../constants'
import { buyLotteryTicket, getBalance, getLotteryData } from 'services'

export const useContract = () => {
  const [data, setData] = React.useState(LOTTERY_INITIAL_STATE)

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

  const refreshContractData = () => getStaticInfo()

  const setReloading = () =>
    setData(state => ({
      ...state,
      isReloading: !state.isReloading,
    }))

  const buyTicket = async () => {
    setData(state => ({
      ...state,
      isReloading: true,
    }))

    await buyLotteryTicket()

    setData(state => ({
      ...state,
      isReloading: false,
    }))
  }

  React.useEffect(() => {
    getStaticInfo()
  }, [])

  return { data, buyTicket, refreshContractData, setReloading }
}
