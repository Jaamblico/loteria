import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import Main from '@/widgets'
import reportWebVitals from './reportWebVitals'

Sentry.init({
  dsn: 'https://304078c336ef48b6815cbc02b619c487@o4504019113672704.ingest.sentry.io/4504019114852352',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

ReactDOM.render(<Main />, document.getElementById('root'))

// TODO: Agregar errorBoundary

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
