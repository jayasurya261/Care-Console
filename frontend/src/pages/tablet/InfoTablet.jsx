import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const InfoTablet = () => {
    const {_id} = useParams();
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [lastUpdated, setLastUpdated] = useState();
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:3000/tablets/tablet/${_id}`)
        .then((response)=>{
          setName(response.data.name)
          setCategory(response.data.category)
          setQuantity(response.data.quantity)
          setLastUpdated(response.data.lastUpdated)
          .catch((error)=>{
    
            alert("An error happened. Please check console!")
            console.log(error);
            
          })
        })
      },[])

      console.log(name)
      console.log(category)
      console.log(quantity)
      console.log(lastUpdated)

  return (
    <div>
      <div className='flex justify-center'>
        <div className='p-10 bg-slate-300 rounded-[10px] mb-20'>
            <p className='text-3xl font-bold'>Tablet Info</p>
            <div className='flex mt-4'>
                <p>Name : </p>
                <p>{name}</p>
            </div>
            <div className='flex mt-4'>
                <p>Category : </p>
                <p>{category}</p>
            </div>
            <div className='flex mt-4'>
                <p>Quantity : </p>
                <p>{quantity}</p>
            </div>
            <div className='flex mt-4'>
                <p>Last Entry : </p>
                <p>{lastUpdated}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTablet
