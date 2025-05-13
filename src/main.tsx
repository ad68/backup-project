import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.tsx'
const updateSW = registerSW({
  onNeedRefresh() {
    const confirmed = window.confirm('نسخه جدید در دسترس است. آیا می‌خواهید بروزرسانی کنید؟')
    if (confirmed) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('اپ آماده استفاده آفلاینه')
  },
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </StrictMode>,
)
