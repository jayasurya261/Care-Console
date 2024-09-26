import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {

  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [adminInfo,setAdminInfo] = useState(null);
    const navigate = useNavigate();

    const submit =async(e)=>{
      if(email === '' ||password === ''){
        alert("Give a Valid Data")
      }
      try{
        const response = await axios.get('http://localhost:3000/admin/find-admin', {
            params: { email, password } 
        });
        setAdminInfo(response.data)
        console.log(adminInfo)
        if(adminInfo.data == null){
          alert("User not Found!")
        }
        else
        {
          localStorage.setItem('userId', adminInfo.data._id);
          localStorage.setItem('login-type','admin')
            navigate('/admin/all-appointment')
        }

    }
    catch(error){
        console.log(error)
    }

    }


  return (
   <div className='flex justify-center pb-20 '>
     <div className='flex justify-center text-center mt-16 bg-slate-200 p-20 rounded-[20px] shadow-2xl'>
      <div>
        <p className='mb-10 text-3xl'>
            ADMIN LOGIN
        </p>
        <div className='flex flex-col'>
        <input className='w-80 rounded-full p-3' type="email" placeholder='Enter Email?'  onChange={(e) => setEmail(e.target.value)}/>
        <input className='w-80 rounded-full p-3 mt-4' type="password" placeholder='Enter Password?'  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={submit} className='mt-10 bg-slate-400 p-3 rounded-full w-56 hover:bg-slate-200'>Submit</button>
      </div>
    </div>
   </div>
  )
}

export default AdminLogin
