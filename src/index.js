import {createRoot} from 'react-dom/client'
import {AppProvider} from './context/AppContext'
import App from './App'
import './scss/index.scss'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)