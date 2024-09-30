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
import Main from './components/main/Main'
import ContextProvider from './context/Context.jsx'
import Payment from './pages/Payment.jsx'
import ChatBot from './pages/ChatBot.jsx'
import InventoryChart from './pages/InventoryChart.jsx'
import InventoryTablets from './pages/InventoryTablets.jsx'
import AddTablet from './pages/tablet/AddTablet.jsx'
import DeleteTablet from './pages/tablet/DeleteTablet'
import EditTablet from './pages/tablet/EditTablet'
import InfoTablet from './pages/tablet/InfoTablet'
import Back from './components/Back'
import ProfileEdit from './pages/ProfileEdit'




const App = () => {

  
  return (
  <div>
    <ContextProvider>
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
      <Route path='/ai' element={<Main/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/inventory-chart' element={<InventoryChart/>}/>
      <Route path='/tablets' element={<InventoryTablets/>}/>
      <Route path='/addTablets' element={<AddTablet/>}/>
      <Route path='/editTablets/:_id' element={<EditTablet/>}/>
      <Route path='/deleteTablets/:_id' element={<DeleteTablet/>}/>
      <Route path='/infoTablets/:_id' element={<InfoTablet/>}/>
      <Route path='/back' element={<Back/>}/>
      <Route path='/edit' element={<ProfileEdit/>}/>


    </Routes>
    <ChatBot/>
    <Footer/>
    </ContextProvider>
    </div>
  )
}

export default App
