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

export const CONTRACT_ADDRESS = '0x4658d96C84DA37e9a62fBEe52aeC75432c664067'

export const CHAIN_NAME = 'goerli'

export const CHAIN_ID = 5
