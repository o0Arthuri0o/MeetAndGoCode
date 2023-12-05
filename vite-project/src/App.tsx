
import {Routes, Route} from 'react-router-dom'
import Main from '../src/pages/Main'
import SuccessReg from './pages/SuccessReg'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/success_reg' element={<SuccessReg/>} />
      <Route path='/login' element={<LoginPage/>} />
     </Routes>
    </>
  )
}

export default App
