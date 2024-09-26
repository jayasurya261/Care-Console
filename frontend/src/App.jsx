import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BookAppointment from './pages/BookAppointment'
import MyProfile from './pages/MyProfile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ConfirmBooking from './pages/ConfirmBooking'
import AllAppointment from './pages/AllAppointment'
import FeedbackForm from './pages/FeedbackForm'
import Calender from './components/Calender'
import AdminLogin from './components/AdminLogin'
import AppointmentInfo from './pages/AppointmentInfo'
import Alert from './pages/Alert'
import MyAppointments from './pages/MyAppointments'
import ECommerce from './pages/ECommerce'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Appointment from './pages/Appointment'




const App = () => {

  
  return (
  <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:_id' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/appointment' element={<BookAppointment/>}/>
      <Route path="/my-profile" element={<MyProfile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/confirm/:date/:time/:description' element={<ConfirmBooking/>}/>
      <Route path='/admin/all-appointment' element={<AllAppointment/>}/>
      <Route path='/feedbackform' element={<FeedbackForm/>}/>
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/admin-login' element={<AdminLogin/>}/>
      <Route path='/appointment/:_id' element={<AppointmentInfo/>}/>
      <Route path='/alert' element={<Alert/>}/>
      <Route path='/my-appointments/:email' element={<MyAppointments/>}/>
      <Route path='/ecommerce' element={<ECommerce/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/appointmentDetails/:_id' element={<Appointment/>}/>

    </Routes>
    <Footer/>
    </div>
  )
}

export default App
