import { ethers } from 'ethers'
import abi from '../utils/Lottery.json'

const CONTRACT_ADDRESS = '0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e'

const CHAIN_ID = 'rinkeby'

const { formatEther } = ethers.utils

const provider = ethers.getDefaultProvider(CHAIN_ID)

const lotteryContract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, provider)

export const getBalance = async () => {
  try {
    const balance = await provider.getBalance(CONTRACT_ADDRESS)

    const formattedBalance = formatEther(balance)

    return Number(formattedBalance)
  } catch (e) {
    console.error(e)
  }
}

export const getLotteryData = async () => {
  try {
    const prize = formatEther(await lotteryContract.getPrize()) ?? null

    const ticketPrice =
      formatEther(await lotteryContract.getTicketPrice()) ?? null

    const status = await lotteryContract.getLotteryState()

    const numOfPlayers = Number(await lotteryContract.getNumberOfPlayers())

    const players = await lotteryContract.getPlayers()

    const playersRequired = Number(await lotteryContract.getPlayersRequired())

    const lastWinner = await lotteryContract.getWinner()

    const address = await lotteryContract.address

    return {
      prize,
      ticketPrice,
      status,
      numOfPlayers,
      players,
      playersRequired,
      lastWinner,
      address,
    }
  } catch (e) {
    console.error(e)
  }
}
