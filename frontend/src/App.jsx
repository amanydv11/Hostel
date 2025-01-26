import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {Routes,Route , BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
