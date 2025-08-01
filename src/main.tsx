import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import ToasterProvider from './provider/ToasterProvider'
import './style/global.css'
import App from './App.tsx'
import ReactQueryProvider from './provider/ReactQueryProvider/index.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <ToasterProvider />
      <App />
    </ReactQueryProvider>
  </BrowserRouter>

)
