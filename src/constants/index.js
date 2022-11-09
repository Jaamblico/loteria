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

export const CONTRACT_ADDRESS = '0xdc12b61cee7E9BaEDf552e8DB42744b9f63a555A'

export const CHAIN_NAME = 'goerli'

export const CHAIN_ID = 5
