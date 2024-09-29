import React from 'react'
import {images} from '../assets/images'
import { Link } from 'react-router-dom'
import Back from '@/components/Back'
import BubbleMovement from '@/components/Bubble'

const AboutUs = () => {
  return (<>
   <div className=''>
    <BubbleMovement/>
     <Link to={'/'}>
     <Back />
     </Link>
     </div>
    <div className='text-center '>
        <p className='text-2xl font-bold underline'>Care Console Clinic</p>
      <div className='flex justify-center'>
        
        <div className='flex mb-20 mt-20'>
            <img className='w-[700px] rounded-[10px]' src={images.clinic} alt="" />
            <p className='w-[500px] ml-40'>At Care Console, we take pride in offering comprehensive and specialized care for infants, ensuring their health and well-being from birth onward. Our team of highly trained pediatricians provides personalized care for every child, focusing on preventive health measures, early detection of illnesses, and ensuring each baby reaches important developmental milestones. We understand how important it is for parents to feel confident in their child's care, and we strive to create a nurturing environment that supports both the child and the family.<br/>
            <br/>
            <br/>

In addition to our expertise in infant care, we specialize in the diagnosis and management of fever and diabetes. Our doctors are equipped with the latest tools and medical knowledge to effectively treat fever, ensuring timely intervention and preventing complications. For patients with diabetes, we offer a comprehensive approach, including personalized treatment plans, lifestyle guidance, and regular monitoring, to help manage and control the condition. Whether it's managing a common illness or a chronic condition, our clinic is committed to delivering the highest level of care for every patient.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs
