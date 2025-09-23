 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Browse from './Components/Browse.jsx'
import appStore from './redux-store/appStore.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  
import MovieDetailsPage from './Components/MovieDetailsPage.jsx'
import WatchList from './Components/WatchList.jsx'
   
createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Login />}> </Route>
                    <Route path='/browse' element={<Browse />}> </Route>
                    <Route path='/browse/:movieId' element={<MovieDetailsPage />}> </Route>
                    <Route path='/watchlist' element={<WatchList />}> </Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
