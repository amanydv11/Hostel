import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {Routes,Route , BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import EmailLogin from './Components/EmailLogin'
import Signup from './Components/Signup'
import Messages from './Components/UserMessages'
import Notification from './Components/Usernotification'
import Useraccount from './Components/Useraccount'
import Userwishlist from './Components/Userwishlist'
import Userprofile from './Components/Userprofile'
import Help from './Pages/Help'
import YourHostel from './Pages/YourHostel'
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
     <Route path='/messages' element={<Messages/>}/>
     <Route path='/notification' element={<Notification/>}/>
     <Route path='/account' element={<Useraccount/>}/>
     <Route path='/wishlist' element={<Userwishlist/>}/>
     <Route path='/profile' element={<Userprofile/>}/>
     <Route path='/help' element={<Help/>}/>
     <Route path='/host/hostel' element={<YourHostel/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
