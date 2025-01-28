import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {Routes,Route , BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import EmailLogin from './Components/EmailLogin'
import Signup from './Components/Signup'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes >
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>} />
     <Route path='/emaillogin' element={<EmailLogin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
