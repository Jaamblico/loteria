import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserClient, Hub } from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import { ContractProvider } from '@/context/ContractContext'
import { WalletProvider } from '@/context/WalletContext'
import { Main } from './Main'
import { client } from '@/hooks/useLotteryStateGraphql'
import { Provider } from 'urql'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }
`

// TODO: Create HOC for WalletProvider and ContractProvider maybe?
function App() {
  React.useEffect(() => {
    const client = new BrowserClient({
      dsn: 'https://304078c336ef48b6815cbc02b619c487@o4504019113672704.ingest.sentry.io/4504019114852352',
      environment: 'develop',
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1,
      sampleRate: 1,
    })

    const customHub = new Hub(client)

    return customHub
  }, [])

  return (
    <>
      <GlobalStyle />
      <WalletProvider>
        <Provider value={client}>
          <ContractProvider>
            <Main />
          </ContractProvider>
        </Provider>
      </WalletProvider>
    </>
  )
}

export default App
