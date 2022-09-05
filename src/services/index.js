import { ethers } from 'ethers'

import abi from '../utils/Lottery.json'

const CONTRACT_ADDRESS = '0x03E920cBEd6b209EaC9ABE24F9C9778Cf682EC1e'

const CHAIN_ID = 'rinkeby'

const { formatEther, parseEther } = ethers.utils

const defaultProvider = ethers.getDefaultProvider(CHAIN_ID)

export const lotteryContract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, defaultProvider)

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
    const prize = formatEther(await lotteryContract.getPrize()) ?? null

    const price = formatEther(await lotteryContract.getTicketPrice()) ?? null

    const status = await lotteryContract.getLotteryState()

    const numOfPlayers = Number(await lotteryContract.getNumberOfPlayers())

    const players = await lotteryContract.getPlayers()

    const playersRequired = Number(await lotteryContract.getPlayersRequired())

    const lastWinner = await lotteryContract.getWinner()

    const address = await lotteryContract.address

    return {
      prize,
      price,
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

export const buyLotteryTicket = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum)

    const signer = provider.getSigner()

    const lotteryContractSigned = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer)

    const ticketPrice = formatEther(await lotteryContract.getTicketPrice()) ?? null

    const buyTicketTxn = await lotteryContractSigned.buyTicket({
      value: parseEther(ticketPrice),
      gasLimit: 300000,
    })
    // console.log('Mining...', buyTicketTxn.hash)

    await buyTicketTxn.wait()
    // console.log('Mined -- ', buyTicketTxn.hash)
  } catch (e) {
    console.error(e)
  }
}
