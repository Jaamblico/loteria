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
