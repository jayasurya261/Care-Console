import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const AddTablet = () => {
    const navigate = useNavigate()
   

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    function create(e) {
        e.preventDefault();
        console.log(name)
        console.log(category)
        console.log(quantity)

        const data =  {
            name,
            category,
            quantity,
        }

        axios
        .post('http://localhost:3000/tablets/add-tablet',data)
        .then(()=>{
            console.log("Created Successfully")
            navigate('/tablets')
        })
        .catch((error)=>{
            
            alert(`${error}An error happend. Please check console`)
            console.log(error)
        })

    
       
    }
    return (
        <div className='mb-20 mt-20'>
            <div className='flex justify-center'>
                <form className='flex flex-col bg-slate-300 p-10 rounded-[13px] items-center shadow-2xl'>
                    <p className='text-3xl font-bold mb-10'>Add Tablets</p>
                    <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Category' type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Quantity' type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                    <button onClick={create} className='hover:bg-slate-400 w-[90px] rounded-2xl p-2'>Create</button>
                    
                </form>
            </div>
        </div>
    )
}

export default AddTablet
