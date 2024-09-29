import axios from 'axios'
import React from 'react'
import {useNavigate,useParams} from 'react-router-dom';

const DeleteTablet = () => {
  const navigate = useNavigate()
  const {_id} = useParams();
  console.log(_id)
  function dele(){
    console.log("Clicked")

    axios
    .delete(`http://localhost:3000/tablets/deleteTablets/${_id}`)
    .then(()=>{
        console.log("Tablet Info Deleted Successfully")
        alert("Tablet Info Deleted Successfully")
        navigate('/tablets')
    })
    .catch((error)=>{
      alert('An error happended. please click console.')
      console.log(error);
    })
  }
  return (
    <div className='mt-40 mb-20'>
      <div className='flex justify-center'>
        <button onClick={dele} className='p-10 bg-red-500 rounded-[10px] w-[400px] text-white text-3xl hover:scale-110'>DELETE TABLET INFO</button>
      </div>
    </div>
  )
}

export default DeleteTablet
