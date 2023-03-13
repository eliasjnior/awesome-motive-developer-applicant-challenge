import React from 'react'
import ReactDOM from 'react-dom/client'

import AdminPage from './pages/AdminPage'

console.log('running')
console.log(document.getElementById('adc-admin-page-root'))

ReactDOM.createRoot(
  document.getElementById('adc-admin-page-root') as HTMLElement
).render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>
)
