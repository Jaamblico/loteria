import * as React from 'react'
import { useWalletconnect } from 'Hooks/useWalletconnect'

const WalletContext = React.createContext()

function WalletProvider({ children }) {
  const { wallet, connect, disconnect } = useWalletconnect()

  return (
    <WalletContext.Provider value={{ wallet, connect, disconnect }}>
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
