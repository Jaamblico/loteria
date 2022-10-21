import * as React from 'react'
import { Spinner } from '@/components/Spinner'
import { useContract } from '@/hooks/useLotteryContract'

const ContractContext = React.createContext({})

function ContractProvider({ children }) {
  const {
    data,
    buyTicket,
    refreshContractData,
    setIsReloading,
    setIsProcessingTx,
  } = useContract()

  const { isLoading } = data

  if (isLoading) return <Spinner />

  return (
    <ContractContext.Provider
      value={{
        ...data,
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
