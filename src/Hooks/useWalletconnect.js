import * as React from 'react'
import Web3Modal from 'web3modal'
import WalletConnect from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import { WALLET_INITIAL_STATE } from '../constants'
import { CHAIN_NAME } from '../services/lottery'

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
  providerOptions,
  cacheProvider: true, // very important
  network: CHAIN_NAME,
  theme: 'dark',
})

export const useWalletconnect = () => {
  const [wallet, setWallet] = React.useState(WALLET_INITIAL_STATE)

  const { provider, error } = wallet

  const connect = async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()

      setWallet(s => ({ ...s, provider, library, network }))

      if (accounts) {
        setWallet(s => ({ ...s, account: accounts[0] }))
      }
    } catch (error) {
      setWallet(s => ({ ...s, error }))
    }
  }

  const refreshState = () => {
    setWallet(WALLET_INITIAL_STATE)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }

  React.useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        console.log('accountsChanged', accounts)
        if (accounts) {
          setWallet(s => ({ ...s, account: accounts[0] }))
        }
      }

      // TODO: Since chainId is not part of state check how to update network object instead
      const handleChainChanged = _hexChainId => {
        console.log('chainChanged', _hexChainId)
        // setWallet(s => ({ ...s, _hexChainId }))
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider])

  return { wallet, setWallet, connect, disconnect }
}
