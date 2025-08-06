import { useEffect, useState } from 'react'
import Routes from './routes'
import { initDB, initOfflineDb } from './lib/indexdb'
import { registerSW } from 'virtual:pwa-register'
import UpdatePwaModal from './components/kit/UpdatePwaModal'

function App() {
  const [needRefresh, setNeedRefresh] = useState(false)
  const [updateFn, setUpdateFn] = useState<null | (() => void)>(null)
  useEffect(() => {
    initDB()
    initOfflineDb()
  }, [])
  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true)
        setUpdateFn(() => () => updateSW(true))
      },
      onOfflineReady() {
        console.log('اپ آماده استفاده آفلاینه')
      },
    })
  }, [])
  return (
    <>
      <Routes />

      {needRefresh && updateFn && (
        <UpdatePwaModal onConfirm={() => {
          updateFn()
          setNeedRefresh(false)
        }} />
      )}

    </>
  )
}

export default App
