import * as React from 'react'

const ACCOUNTS = 'eth_accounts'
const REQUEST_ACCOUNTS = 'eth_requestAccounts'

export const useWallet = () => {
  const [account, setAccount] = React.useState(null)

  const connectWallet = async () => {
    const accounts = await ethereum.request({
      method: REQUEST_ACCOUNTS,
    })

    // If the user have multiple accounts in their wallet we grab the first one.
    const [account] = accounts

    // Before doing this i should check if the user is connected to the right network (mainnet/rinkeby)
    setAccount(account)
  }

  const isWalletConnected = async () => {
    const accounts = await ethereum.request({
      method: ACCOUNTS,
    })

    if (!accounts.length) return

    // If the user have multiple accounts in their wallet we grab the first one.
    const [account] = accounts

    // Before doing this i should check if the user is connected to the right network (mainnet/rinkeby)
    setAccount(account)
  }

  React.useEffect(() => {
    isWalletConnected()
  }, [])

  return { account, connectWallet }
}
