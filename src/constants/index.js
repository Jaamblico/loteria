export const LOTTERY_INITIAL_STATE = {
  isLoading: true,
  prize: 0,
  price: 0,
  status: 0,
  numOfPlayers: 0,
  players: [],
  playersRequired: 0,
  lastWinner: '',
  address: '',
  isReloading: false,
  balance: 0,
  isProcessingTx: false,
}

export const WALLET_INITIAL_STATE = {
  provider: null,
  library: null,
  account: null,
  signature: '',
  error: '',
  network: null,
  message: '',
  signedMessage: '',
  verified: null,
}

export const CONTRACT_ADDRESS = '0x01434E6A301e70a7C84679272F0959b09850651f'

export const CHAIN_NAME = 'goerli'

export const CHAIN_ID = 5
