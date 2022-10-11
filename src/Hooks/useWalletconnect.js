import * as React from 'react'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'

export const useWalletconnect = () => {
  const [account, setAccount] = React.useState(null)

  // Create a connector
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

  const connectWallet = () => {
    // Subscribe to connection events
    connector.on('connect', (error, payload) => {
      if (error) {
        throw error
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0]

      console.log({ chainId })
      console.log({ accounts })

      // If the user have multiple accounts in their wallet we grab the first one.
      const [account] = accounts

      // TODO: Before doing this i should check if the user is connected to the right network (mainnet/goerli)
      setAccount(account)
    })
  }

  const isWalletConnected = () => {
    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession()
    }
  }

  React.useEffect(() => {
    isWalletConnected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { account, connectWallet }
}
