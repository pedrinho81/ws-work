import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { AppProvider } from './context/AppContext'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AppProvider>
    <App />
    </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
