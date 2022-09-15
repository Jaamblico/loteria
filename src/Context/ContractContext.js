import * as React from 'react'

import { Spinner } from '../Components/Spinner'
import { useContract } from '../Hooks/useContract'

const ContractContext = React.createContext({})

function ContractProvider({ children }) {
  const { data, buyTicket, setPlayers, setReloading, isReloading } =
    useContract()

  const { isLoading } = data

  if (isLoading) return <Spinner />

  return (
    <ContractContext.Provider
      value={{ ...data, buyTicket, setPlayers, setReloading, isReloading }}
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
