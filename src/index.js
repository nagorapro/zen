import * as ReactDOM from 'react-dom/client'
import {AppProvider} from './context/AppContext'
import App from './App'
import './scss/index.scss'

const $root = document.querySelector('#root')
const root = ReactDOM.createRoot($root)

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)