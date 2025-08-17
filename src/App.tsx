
import Routes from './routes'
import UpdatePwaModal from './components/kit/UpdatePwaModal'
import useApp from './App.biz'
import { initDB, initOfflineDb } from './lib/indexdb'
import { useEffect } from 'react'



function App() {
  const { needRefresh, updateFn, setNeedRefresh, getAllData } = useApp()

  useEffect(() => {
    initDB()
    initOfflineDb()
    getAllData()
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
