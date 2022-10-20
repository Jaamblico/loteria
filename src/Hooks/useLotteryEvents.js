import React from 'react'

// Hooks
import { useContractData } from 'Context/ContractContext'

export function useLotteryEvents(lotteryContract) {
  const { refreshContractData } = useContractData()

  const handleEvent = React.useCallback(
    event => {
      console.log(event)
      refreshContractData()
    },
    [refreshContractData],
  )

  React.useEffect(() => {
    if (lotteryContract) {
      lotteryContract.on('EnterLottery', (_, e) => handleEvent(e))
    }

    return () => lotteryContract.off('EnterLottery')
  }, [handleEvent, lotteryContract])
}
