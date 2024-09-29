import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const EditTablet = () => {

  const {_id} = useParams();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get(`http://localhost:3000/tablets/tablet/${_id}`)
    .then((response)=>{
      setName(response.data.name)
      setCategory(response.data.category)
      setQuantity(response.data.quantity)
      .catch((error)=>{

        alert("An error happened. Please check console!")
        console.log(error);
        
      })
    })
  },[])

  function edit(e) {
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
      .put(`http://localhost:3000/tablets/updateTablet/${_id}`,data)
      .then(()=>{
          console.log("Edited Successfully")
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
            <p className='text-3xl font-bold mb-10'>EditTablets</p>
            <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Category' type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <input className='mb-10 p-2 w-[350px] rounded-[10px]' placeholder='Enter Tablet Quantity' type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
            <button onClick={edit} className='hover:bg-slate-400 w-[90px] rounded-2xl p-2'>EDIT</button>
            
        </form>
    </div>
</div>
  )
}

export default EditTablet;
