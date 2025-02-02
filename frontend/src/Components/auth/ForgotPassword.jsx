import { Alert, Input } from '@mui/material';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const navigate= useNavigate()
    const [email, setEmail] = useState("");
const[errorMessage,setErrorMessage] =useState(null)
    const[loading,setLoading] = useState(false)
    const [message, setMessage] = useState("");
    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(!email){
         return setErrorMessage('Please fill all fields')
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            const res= await fetch('/api/auth/forgot-password',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({email}) 
            });
            const data = await res.json();
            if (!res.ok) {
              setMessage(data.message)
          }
            if (data.success) {
              setMessage("Reset email sent successfully!");
              navigate('/')
              }
        } catch (error) {
            setErrorMessage(error.message)
        }finally {
          setLoading(false);
      }

   }
  return (
    <div>
       <div
    style={{
        maxWidth: "400px",
        margin: "106px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
        <h1 className='text-2xl font-serif'>Enter your registered email....</h1>
<form onSubmit={handleSubmit}>
        
        <div className=" flex flex-col items-center m-3 gap-4 box-border ">
          <Input className='w-[250px] border py-1 px-2 rounded' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email..'/>
          <button type='submit'  className='bg-red-500 border cursor-pointer border-black rounded-md w-[100px] h-10'>
          {loading ? "Sending..." : "Send"}
        </button>
  </div>  
  <div className="text-gray-400 text-sm">Note: On clicking the send button go to your gmail inbox and reset your password. </div>
      </form>
      {errorMessage && <Alert color="failure" className="mt-3">{errorMessage}</Alert>}
      {message && <Alert color="success" className="mt-3">{message}</Alert>}
    </div>
    </div>
  )
}

export default ForgotPassword
