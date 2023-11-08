import { createRoot } from 'react-dom/client'
import { Router } from 'router'
import 'index.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from 'store/store'

const container = document.getElementById('root')
const root = createRoot(container!)
const persistor = persistStore(store)
root.render(
  <PersistGate persistor={persistor}>
    <Router />
  </PersistGate>,
)
