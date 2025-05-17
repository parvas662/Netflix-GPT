
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet,  } from 'react-router-dom';
``
function App() { 
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
