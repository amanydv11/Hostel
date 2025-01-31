import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {Routes,Route , BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import EmailLogin from './Components/EmailLogin'
import Signup from './Components/Signup'
import Messages from './Pages/UserMessages'
import Notification from './Components/Usernotification'
import Useraccount from './Components/Useraccount'
import Userwishlist from './Components/Userwishlist'
import Userprofile from './Components/Userprofile'
import Help from './Pages/Help'
import YourHostel from './Pages/YourHostel'
import AccountDelete from './Pages/AccountDelete'
import Personal from './Pages/Personal'
import AccountNotification from './Pages/AccountNotification'
import Security from './Pages/Security'
import Payments from './Pages/Payments'
import Privacy from './Pages/Privacy'
import Refferal from './Pages/Refferal'
import Taxes from './Pages/Taxes'
import Accountdelconfrm from './Pages/Accountdelconfrm'
import Notfound from './Pages/Notfound'
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
     <Route path='/guest/messages' element={<Messages/>}/>
     <Route path='/notification' element={<Notification/>}/>
     <Route path='/account-setting' element={<Useraccount/>}/>
     <Route path='/wishlist' element={<Userwishlist/>}/>
     <Route path='/guest/userprofile' element={<Userprofile/>}/>
     <Route path='/help' element={<Help/>}/>
     <Route path='/host/hostel' element={<YourHostel/>}/>
     <Route path='/account-delete/reason' element={<AccountDelete/>}/>
     <Route path='/account-delete/confirm' element={<Accountdelconfrm/>}/>
     <Route path='/account-setting/payments-payouts' element={<Payments/>}/>
     <Route path='/account-setting/privacy' element={<Privacy/>}/>
     <Route path='/account-setting/personal-info' element={<Personal/>}/>
     <Route path='/account-setting/invite' element={<Refferal/>}/>
     <Route path='/account-setting/tax' element={<Taxes/>}/>
     <Route path='/account-setting/security' element={<Security/>}/>
     <Route path='/account-setting/notification' element={<AccountNotification/>}/>
<Route path='*' element={<Notfound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
