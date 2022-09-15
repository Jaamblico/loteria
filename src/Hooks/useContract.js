import React from 'react'

import { LOTTERY_INITIAL_STATE } from '../constants'
import { buyLotteryTicket, getBalance, getLotteryData } from '../services'

export const useContract = () => {
  const [data, setData] = React.useState(LOTTERY_INITIAL_STATE)

  async function getStaticInfo() {
    const addressBalance = await getBalance() // Promise.race[]
    const lotteryData = await getLotteryData() // Promise.race[]

    setData(state => ({
      ...state,
      ...lotteryData,
      balance: addressBalance,
      isLoading: false,
    }))
  }

  const setPlayers = address =>
    setData(state => ({
      ...state,
      players: [...state.players, address],
      numOfPlayers: state.numOfPlayers + 1,
    }))

  const setReloading = () =>
    setData(state => ({
      ...state,
      isReloading: !state.isReloading,
    }))

  React.useEffect(() => {
    getStaticInfo()
  }, [])

  const buyTicket = async () => {
    await buyLotteryTicket()

    setData(state => ({
      ...state,
      isReloading: true,
    }))
  }

  return { data, buyTicket, setPlayers, setReloading }
}
