import { CONTRACT_ADDRESS } from '@/constants'
import { createClient, useQuery } from 'urql'

const BASE_URL = 'https://api.studio.thegraph.com/query/37382/lottery/0.0.1'

export const client = createClient({
  url: BASE_URL,
})

const lotteryStateQuery = `
query {
  lotteryStores(orderBy: id, orderDirection: desc, first: 1) {
    id
    event
    status
    price
    status
    prize
    winner
    playersRequired
    players
  }
}
`

export function useLotteryGraphql() {
  const [result, reexecuteQuery] = useQuery({
    query: lotteryStateQuery,
  })

  const { data, fetching, error } = result

  const [lotteryData] = data?.lotteryStores || []

  if (lotteryData) {
    const decoratedLotteryData = {
      prize: lotteryData?.prize || 0,
      price: lotteryData?.price || 0,
      status: lotteryData.status,
      numOfPlayers: lotteryData.players.length,
      players: lotteryData.players,
      playersRequired: lotteryData.playersRequired,
      lastWinner: lotteryData.winner,
      address: CONTRACT_ADDRESS,
    }

    return { data: decoratedLotteryData, fetching, error, reexecuteQuery }
  }

  return { fetching, error, reexecuteQuery }
}
