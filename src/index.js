import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'simplebar/src/simplebar.css'
import { Provider as ReduxProvider } from 'react-redux'
import 'assets/third-party/apex-chart.css'
import App from './App'
import store from './store'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename='/free'>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
