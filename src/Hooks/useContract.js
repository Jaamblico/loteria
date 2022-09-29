import React from 'react'
import { LOTTERY_INITIAL_STATE } from 'constants'
import { buyLotteryTicket, getBalance, getLotteryData } from 'services'

export const useContract = () => {
  const [data, setData] = React.useState(LOTTERY_INITIAL_STATE)

  async function getStaticInfo() {
    const balance = await getBalance() // Promise.race[]
    const lotteryData = await getLotteryData() // Promise.race[]

    setData(state => ({
      ...state,
      ...lotteryData,
      balance,
      isLoading: false,
    }))
  }

  const updateContract = () => getStaticInfo()

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

  return { data, buyTicket, updateContract, setReloading }
}
