import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Spin } from 'antd'
import thunk from 'redux-thunk'
import reducer from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const middleware = [ thunk ]

// Clear data by typing 'localStorage.clear()' in browser's console.
const persistedReducer = persistReducer(
  { key: 'authenticate',
    whitelist:['authenticate'],
    storage 
  }, reducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

const persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Spin size='large' />}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
