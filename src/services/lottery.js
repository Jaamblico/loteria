import { ethers } from 'ethers'
import { CONTRACT_ADDRESS, CHAIN_NAME } from '@/constants'
import abi from '@/utils/Lottery.json' // abstract binary interface

const defaultProvider = ethers.getDefaultProvider(CHAIN_NAME)

export const lotteryContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  abi.abi,
  defaultProvider,
)
