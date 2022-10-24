import { ethers } from 'ethers'
import { formatEther } from '@/utils'
import {
  CONTRACT_ADDRESS,
  LOTTERY_INITIAL_STATE,
  CHAIN_NAME,
} from '@/constants'
import abi from '@/utils/Lottery.json' // abstract binary interface

const defaultProvider = ethers.getDefaultProvider(CHAIN_NAME)

export const lotteryContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  abi.abi,
  defaultProvider,
)

export const getContractAddress = () => lotteryContract.address

export const getBalance = async () => {
  try {
    const balance = await defaultProvider.getBalance(CONTRACT_ADDRESS)

    const formattedBalance = formatEther(balance)

    return Number(formattedBalance)
  } catch (e) {
    console.error(e)
  }
}

export const getLotteryData = async () => {
  try {
    const prize = await lotteryContract.getPrize()

    const price = await lotteryContract.getTicketPrice()

    const status = await lotteryContract.getLotteryStatus()

    const numOfPlayers = Number(await lotteryContract.getNumberOfPlayers())

    const players = await lotteryContract.getPlayers()

    const playersRequired = Number(await lotteryContract.getPlayersRequired())

    const lastWinner = await lotteryContract.getWinner()

    const addressContract = await lotteryContract.address

    return {
      prize,
      price,
      status,
      numOfPlayers,
      players,
      playersRequired,
      lastWinner,
      addressContract,
    }
  } catch (e) {
    console.error(e)
    return LOTTERY_INITIAL_STATE
  }
}
