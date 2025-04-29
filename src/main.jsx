import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Browse from './Components/browse.jsx'
import appStore from './redux-store/appStore.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Login />}> </Route>
                    <Route path='/browse' element={<Browse />}> </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
