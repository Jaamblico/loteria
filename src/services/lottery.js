import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, CHAIN_NAME } from '@/constants'
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

export const getGasPrice = async () => {
  const gasPrice = await defaultProvider.getGasPrice()
  return formatEther(gasPrice)
}

export const getLotteryData = async () => {
  try {
    const getPrize = lotteryContract.getPrize()
    const getPrice = lotteryContract.getTicketPrice()
    const getStatus = lotteryContract.getLotteryStatus()
    const getNumOfPlayers = lotteryContract.getNumberOfPlayers()
    const getPlayers = lotteryContract.getPlayers()
    const getPlayersRequired = lotteryContract.getPlayersRequired()
    const getLastWinner = lotteryContract.getWinner()
    const getAddressContract = lotteryContract.address

    const [
      prize,
      price,
      status,
      numOfPlayers,
      players,
      playersRequired,
      lastWinner,
      addressContract,
    ] = await Promise.all([
      getPrize,
      getPrice,
      getStatus,
      getNumOfPlayers,
      getPlayers,
      getPlayersRequired,
      getLastWinner,
      getAddressContract,
    ])

    return {
      prize,
      price,
      status,
      numOfPlayers: Number(numOfPlayers),
      players,
      playersRequired: Number(playersRequired),
      lastWinner,
      addressContract,
    }
  } catch (e) {
    console.error(e)
    return LOTTERY_INITIAL_STATE
  }
}
