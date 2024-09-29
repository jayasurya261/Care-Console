import React from 'react'
import {images} from '../assets/images'
import { useNavigate } from 'react-router-dom'



const Service = () => {

  const navigate = useNavigate();
  function bookAppointment(){
    const userId = localStorage.getItem("userId");
    if(userId)
    {
      navigate('/appointment');
    }
    else{
      navigate('/signup')
    }
  }

  return (<>
  
    <div className="flex  " >
      {/*-------Right Side----------*/}
      <div>
        <img className=' sm:w-96 sm:ml-44  sm:rounded-[20px] shadow-2xl ' src={images.infant} alt="" />
      </div>
      {/*-------Left Side----------*/}
      <div className='p-3 text-white  ml-32 mt-28 rounded-[10px] h-[300px] shadow-xl' style={{backgroundColor:'#6c60f0'}}>
        <p className=' text-3xl font-medium mt-10 ml-4'>INFANT</p>
        <p className=' mt-10 font-medium w-[900px] ml-4'>At our clinic, we prioritize the health and well-being of infants by offering comprehensive care tailored to their unique needs. From routine check-ups to vaccinations, our dedicated team ensures that your child’s growth and development are closely monitored. We provide parents with guidance on essential topics such as feeding, sleep patterns, and early childhood milestones. With a focus on early detection and preventive care, our clinic strives to create a nurturing environment where infants can thrive and parents can feel confident in their child’s health journey.</p>
      </div>
    </div>

    <div className='flex mt-10 '>
        {/*--------Right Side--------------*/}
        <div className='p-3  ml-32 mt-28 rounded-[10px] h-[300px] shadow-xl text-white' style={{backgroundColor:'#6c60f0'}}>
            <p className='ml-4 font-medium text-3xl mt-10 mb-10'>FEVER</p>
            <p className='ml-4 font-medium w-[900px]'>Fever is a common sign that the body is fighting an infection, and while it can be uncomfortable, it’s often a natural defense mechanism. At our clinic, we provide comprehensive care for individuals of all ages experiencing fever. Our team evaluates the underlying cause, whether it’s a viral or bacterial infection, and recommends appropriate treatments to alleviate symptoms and promote recovery. We offer guidance on managing fever at home, including hydration, rest, and medication, as well as advice on when medical attention is necessary. Your health and comfort are our priority, and we’re here to support you through every step of recovery.</p>
        </div>
        {/*--------Left Side--------------*/}
        <div>
            <img className='w-96 ml-32 rounded-[20px] shadow-2xl' src={images.fever} alt="" />
        </div>
    </div>

    <div className='flex'>
      {/*-------Right Side----------*/}
      <div>
        <img className='w-96 ml-44 rounded-[20px] shadow-2xl' src={images.diabetes} alt="" />
      </div>
      {/*-------Left Side----------*/}
      <div className='p-3  ml-32 mt-28 rounded-[10px] h-[300px] shadow-xl text-white' style={{backgroundColor:'#6c60f0'}}>
        <p className='ml-4 text-3xl font-medium mt-10'>DIABETES</p>
        <p className='ml-4 mt-10 font-medium w-[900px] '>Managing diabetes requires ongoing care and attention, and our clinic is dedicated to providing comprehensive support for individuals living with this condition. We offer personalized diabetes management plans that include regular monitoring, dietary guidance, medication management, and lifestyle advice to help control blood sugar levels and prevent complications. Our team works closely with patients to educate them on effective self-care practices and the importance of routine check-ups. Whether you’re newly diagnosed or seeking better control of your diabetes, our clinic is here to provide expert care and help you lead a healthier, balanced life.</p>
      </div>
    </div>
    <div className='flex justify-center'>
    <button onClick={bookAppointment} className='p-3 rounded-full mt-10 mb-10 bg-slate-400 shadow-2xl hover:scale-110 hover:bg-slate-200 text-white' style={{backgroundColor:'#647cf6'}}>BOOK APPOINTMENT</button>
    </div>
    
    </>
  )
}

export default Service;
