
import Routes from './routes'
import UpdatePwaModal from './components/kit/UpdatePwaModal'
import useApp from './App.biz'


function App() {
  const { needRefresh, updateFn, setNeedRefresh } = useApp()
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
