import * as React from 'react'
import { useWalletconnect } from 'Hooks/useWalletconnect'

const WalletContext = React.createContext()

function WalletProvider({ children }) {
  const { account, connectWallet } = useWalletconnect()

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
