import React from 'react'

// Hooks
import { useContractData } from '../Context/ContractContext'

export function useLotteryEvents(lotteryContract) {
  const { setPlayers } = useContractData()

  const handleEvent = React.useCallback(
    event => {
      const { address } = event || {}
      console.log(event)
      setPlayers(address)
    },
    [setPlayers],
  )

  React.useEffect(() => {
    if (lotteryContract) {
      lotteryContract.on('EnterLottery', (_, e) => handleEvent(e))
    }

    return () => lotteryContract.off('EnterLottery')
  }, [])
}
