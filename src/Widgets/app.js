import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserClient, Hub } from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import { ContractProvider } from '@/context/ContractContext'
import { WalletProvider } from '@/context/WalletContext'
import { Main } from './Main'

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
      dsn: process.env.SENTRY_DSN,
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
        <ContractProvider>
          <Main />
        </ContractProvider>
      </WalletProvider>
    </>
  )
}

export default App
