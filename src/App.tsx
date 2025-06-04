import { useEffect } from 'react'
import Routes from './routes'
import { initDB } from './lib/indexdb'
function App() {
  useEffect(() => {
    initDB()
  }, [])
  return (
    <>
      <Routes />
    </>
  )
}

export default App
