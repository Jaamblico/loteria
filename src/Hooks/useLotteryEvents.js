import React from 'react'

import { useContract } from './useContract'
import { lotteryContract } from '../services'

export function useLotteryEvents() {
  const { setPlayers } = useContract()

  const handleEvent = React.useCallback(
    event => {
      const { address } = event || {}
      console.log('EnterLottery', address)
      console.log({ event })
      setPlayers(address)
    },
    [setPlayers],
  )

  React.useEffect(() => {
    lotteryContract.on('EnterLottery', (_, e) => handleEvent(e))
  }, [handleEvent])
}
