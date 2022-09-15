import React from 'react'

// Hooks
import { useContractData } from '../Context/ContractContext'

export function useLotteryEvents(lotteryContract) {
  const { updateContract } = useContractData()

  const handleEvent = React.useCallback(
    event => {
      console.log(event)
      updateContract()
    },
    [updateContract],
  )

  React.useEffect(() => {
    if (lotteryContract) {
      lotteryContract.on('EnterLottery', (_, e) => handleEvent(e))
    }

    return () => lotteryContract.off('EnterLottery')
  }, [handleEvent, lotteryContract])
}
