
import Browse from './Components/browse';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}> </Route>
          <Route path='/browse' element={<Browse />}> </Route>
        </Routes>
      </BrowserRouter> 
  )
}

export default App
