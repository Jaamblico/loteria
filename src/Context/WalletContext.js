import * as React from 'react'
import { useWallet } from 'Hooks/useWallet'

const WalletContext = React.createContext()

function WalletProvider({ children }) {
  const { account, connectWallet } = useWallet()

  return (
    <WalletContext.Provider value={{ account, connectWallet }}>
      {children}
    </WalletContext.Provider>
  )
}

function useWalletContext() {
  const context = React.useContext(WalletContext)

  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider')
  }

  return context
}

export { useWalletContext, WalletProvider }
