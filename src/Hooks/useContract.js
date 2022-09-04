import React from 'react'
import { getBalance, getLotteryData } from '../services'

const INITIAL_STATE = {
  isLoading: true,
  prize: 0,
  ticketPrice: 0,
  status: 0,
  numOfPlayers: 0,
  players: [],
  playersRequired: 0,
  lastWinner: '',
  address: '',
}

export const useContract = () => {
  const [data, setData] = React.useState(INITIAL_STATE)

  React.useEffect(() => {
    async function getStaticInfo() {
      const addressBalance = await getBalance()
      const lotteryData = await getLotteryData()

      //console.log("lotteryData", lotteryData);

      setData(data => ({
        ...data,
        ...lotteryData,
        balance: addressBalance,
        isLoading: false,
      }))
    }
    getStaticInfo()
  }, [])

  return data
}
