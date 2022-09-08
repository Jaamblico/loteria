import React from 'react'

import { buyLotteryTicket, getBalance, getLotteryData } from '../services'

const INITIAL_STATE = {
  isLoading: true,
  prize: 0,
  price: 0,
  status: 0,
  numOfPlayers: 0,
  players: [],
  playersRequired: 0,
  lastWinner: '',
  address: '',
}

export const useContract = () => {
  const [data, setData] = React.useState(INITIAL_STATE)

  async function getStaticInfo() {
    const addressBalance = await getBalance() // Promise.race[]
    const lotteryData = await getLotteryData() // Promise.race[]

    setData(data => ({
      ...data,
      ...lotteryData,
      balance: addressBalance,
      isLoading: false,
    }))
  }

  React.useEffect(() => {
    getStaticInfo()
  }, [])

  const buyTicket = async () => await buyLotteryTicket()

  return { data, buyTicket }
}
