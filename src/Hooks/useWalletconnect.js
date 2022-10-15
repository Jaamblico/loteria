import * as React from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, providers } from 'ethers'

export const useWalletconnect = () => {
  const [account, setAccount] = React.useState(null)

  const [web3Modal, setWeb3Modal] = React.useState(null)

  React.useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          alchemyId: 'Pv7z_NKo_kmwxcuS8i2shIT3IwUEJbd1',
        },
      },
    }

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: 'goerli',
      providerOptions,
    })

    setWeb3Modal(newWeb3Modal)
  }, [])

  async function connectWallet() {
    const provider = await web3Modal.connect()
    const ethersProvider = new providers.Web3Provider(provider)
    const userAddress = await ethersProvider.getSigner().getAddress()
    setAccount(userAddress)
  }

  return { account, connectWallet }
}
