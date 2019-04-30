import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import createAppStore from './store'
import { Provider } from 'react-redux'

const store = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
