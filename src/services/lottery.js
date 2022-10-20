import { ethers } from 'ethers'

import { formatEther } from '../utils'
import { LOTTERY_INITIAL_STATE } from '../constants'

import abi from '../utils/Lottery.json'

export const CONTRACT_ADDRESS = '0x01434E6A301e70a7C84679272F0959b09850651f'

export const CHAIN_NAME = 'goerli'
export const CHAIN_ID = 5

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
