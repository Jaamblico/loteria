import React from 'react'
import { lotteryContract } from '@/services/lottery'
import { useContractData } from '@/context/ContractContext'

export function useLotteryEvents() {
  const { refreshContractData, setIsReloading } = useContractData()

  const handleEvent = React.useCallback(
    async event => {
      console.log('REFRESHING')
      setIsReloading()

      await refreshContractData()

      console.log('FINISH REFRESHING')
      setIsReloading()
    },
    // TODO: Fix this to only execute once per event
    [refreshContractData, setIsReloading],
  )

  React.useEffect(() => {
    if (lotteryContract) {
      lotteryContract.on('EnterLottery', e => handleEvent(e))
    }

    return () => lotteryContract.off('EnterLottery')
  }, [handleEvent])
}
