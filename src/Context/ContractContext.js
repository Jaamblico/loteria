import * as React from 'react'
import { Spinner } from '@/components/Spinner'
import { useContract } from '@/hooks/useLotteryContract'

const ContractContext = React.createContext({})

function ContractProvider({ children }) {
  const {
    lotteryData,
    buyTicket,
    refreshContractData,
    setIsReloading,
    setIsProcessingTx,
  } = useContract()

  const { isLoading } = lotteryData

  if (isLoading) return <Spinner />

  return (
    <ContractContext.Provider
      value={{
        ...lotteryData,
        buyTicket,
        refreshContractData,
        setIsReloading,
        setIsProcessingTx,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

function useContractData() {
  const context = React.useContext(ContractContext)

  if (context === undefined) {
    throw new Error('useContractData must be used within a ContractProvider')
  }

  return context
}

export { ContractProvider, useContractData }
