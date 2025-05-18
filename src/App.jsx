
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet,  } from 'react-router-dom';
``
function App() { 
  return (
    <div >
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
