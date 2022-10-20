import * as React from 'react'
import { useWalletconnect } from 'Hooks/useWalletConnect'

const WalletContext = React.createContext()

function WalletProvider({ children }) {
  const { wallet, setWallet, connect, disconnect } = useWalletconnect()

  return (
    <WalletContext.Provider value={{ wallet, setWallet, connect, disconnect }}>
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
