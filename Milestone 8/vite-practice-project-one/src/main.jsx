import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Num from './Num.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(
  document.getElementById('userName')
).render(
  <React.StrictMode>
    <Num></Num>
  </React.StrictMode>
)

