import React,{useState} from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Back from '@/components/Back'
import BubbleMovement from '@/components/Bubble'

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [number,setNumber] = useState('')
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    function createUser(e){
        e.preventDefault();
        const data =  {
            name,
            email,
            password,
            number,
        }
        setLoading(true);
        console.log(name)
        console.log(password)
        console.log(email)
        console.log(number)

        axios
        .post('http://localhost:3000/users',data)
        .then(()=>{
            setLoading(false)
            navigate('/login')
        })
        .catch((error)=>{
            setLoading(false)
            alert(`${error}An error happend. Please check console`)
            console.log(error)
        })
    }


  return (
    <div className=' pb-20'>
      <BubbleMovement/>
       <div className=''>
     <Link to={'/home'}>
     <Back  />
     </Link>
     </div>
      <div className='flex justify-center mb-3'>
        {loading ? <Spinner/>:''}
        <form className='flex flex-col justify-center  bg-slate-200 p-12 rounded-3xl lg:p-24 shadow-2xl text-center'>
        <h1 className='flex justify-center font-medium text-3xl'>SIGN IN</h1>
        
        <input value={name} onChange={(e)=>setName(e.target.value)} className='lg:w-80 mt-8 p-3 rounded-full' type="text" placeholder='Enter Name' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='mt-8 p-3 rounded-full' type="email" placeholder='Enter Email'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)}  className='mt-8 p-3 rounded-full ' type="password" placeholder='Enter Password'/>
        <input value={number} onChange={(e)=>setNumber(e.target.value)}  className='mt-8 p-3 rounded-full ' type="text" placeholder='Enter mobile number'/>
        <button type='submit' onClick={createUser} className='mt-8 p-2 rounded-full bg-slate-400 text-white hover:bg-slate-300 hover:text-black'>SUBMIT</button>
        <br/>
        <button onClick={()=>navigate('/login')} className='bg-slate-400 text-white rounded-full p-2 hover:bg-slate-300 hover:text-black'>Login?</button>
        <p className='mt-6'>Are u an Admin?</p>
        <button onClick={()=>navigate('/admin-login')} className='rounded-full   hover:text-blue-800 mt-7 underline'> Admin</button>
        </form>
      </div>
    </div>
  )
}
// p-2 bg-slate-400 text-white rounded-[5px] w-20 hover:bg-slate-300 hover:text-black
export default SignUp;
