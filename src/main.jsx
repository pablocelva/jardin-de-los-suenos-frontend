import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
)
