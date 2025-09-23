
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet, } from 'react-router-dom';
 
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
