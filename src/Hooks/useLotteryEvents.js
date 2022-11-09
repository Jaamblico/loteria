import React from 'react'
import { lotteryContract } from '@/services/lottery'
import { useContractData } from '@/context/ContractContext'

export function useLotteryEvents() {
  const { refreshContractData } = useContractData()

  const handleEvent = React.useCallback(
    (data, address) => {
      refreshContractData()
    },
    [refreshContractData],
  )

  React.useEffect(() => {
    if (lotteryContract) {
      lotteryContract.on('BuyTicket', (data, address) =>
        handleEvent(data, address),
      )
    }

    return () => lotteryContract.off('BuyTicket')
  }, [handleEvent])
}
