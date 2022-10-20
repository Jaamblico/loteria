import * as React from 'react'
import Web3Modal from 'web3modal'
import WalletConnect from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

export const useWalletconnect = () => {
  const [provider, setProvider] = React.useState()
  const [library, setLibrary] = React.useState()
  const [account, setAccount] = React.useState()
  const [signature, setSignature] = React.useState('')
  const [error, setError] = React.useState('')
  const [chainId, setChainId] = React.useState()
  const [network, setNetwork] = React.useState()
  const [message, setMessage] = React.useState('')
  // const [signedMessage, setSignedMessage] = React.useState('')
  const [verified, setVerified] = React.useState()

  const providerOptions = {
    walletlink: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: 'Loteria de Babilonia', // Required
        infuraId: '855d00a8b6bb42e4a2b9ca9df69d0516', // Required unless you provide a JSON RPC url; see `rpc` below
      },
    },
    walletconnect: {
      package: WalletConnect, // required
      options: {
        infuraId: '855d00a8b6bb42e4a2b9ca9df69d0516', // required
      },
    },
  }

  const web3Modal = new Web3Modal({
    cacheProvider: true, // very important
    network: 'goerli',
    providerOptions,
    theme: 'dark',
  })

  async function connectWallet() {
    try {
      const provider = await web3Modal.connect()
      const library = new providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error) {
      setError(error)
    }
  }

  const refreshState = () => {
    setAccount()
    setChainId()
    setNetwork('')
    setMessage('')
    setSignature('')
    setVerified(undefined)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }

  React.useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [])

  React.useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        console.log('accountsChanged', accounts)
        if (accounts) setAccount(accounts[0])
      }

      const handleChainChanged = _hexChainId => {
        setChainId(_hexChainId)
      }

      const handleDisconnect = () => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider])

  return { account, connectWallet }
}
