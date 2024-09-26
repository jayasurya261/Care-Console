import express from 'express'
import { User,Appointments,Admin } from '../models/models.js';
const router = express.Router();
import twilio from 'twilio';

//Route for Post user details
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.password ||
            !request.body.number
        ){
            return response.status(400).send({
                message: 'Send all required fields: Name,Email,Password',
            })
        }
        const userDetails = {
            name : request.body.name,
            email : request.body.email,
            password : request.body.password,
            number : request.body.number,
        };
        const userInfo = await User.create(userDetails)
        return response.status(201).send(userInfo)
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.get('/',async(request,response)=>{
    try{
        const usersList = await User.find({});
        return response.status(200).json({
            count:usersList.length,
            data:usersList
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.get('/find-user',async(request,response)=>{
    try{
        const { email, password } = request.query;
        const userInfo = await User.findOne({ email, password });
        return response.status(200).json({
            data:userInfo
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.get('/my-profile',async(request,response)=>{
    try{
        const { userId } = request.query;
        const userData = await User.findById(userId);
        return response.status(200).json({
            data:userData
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})
router.get('/appointment-name',async(request,response)=>{
    try{
        const { email } = request.query;
        const emailData = await User.findOne({email});
        return response.status(200).json({
            data:emailData
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.post('/add-appointments',async(request,response)=>{
    try{
        if(
            !request.body.email ||
            !request.body.date ||
            !request.body.time ||
            !request.body.description ||
            !request.body.fees ||
            !request.body.prescription
        ){
            return response.status(400).send({
                message: 'Send all required fields: Email,date,time',
            })
        }
        const appointmentDetails = {
            email : request.body.email,
            date : request.body.date,
            time : request.body.time,
            description : request.body.description,
            prescription : request.body.fees,
            fees : request.body.prescription,
        };
        const appointmentInfo = await Appointments.create(appointmentDetails)
        return response.status(201).send(appointmentInfo)
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})
router.get('/get-appointments/:id', async (request, response) => {
    const { id } = request.params; // Get the appointment ID from the URL
    
    try {
      // Find the appointment by ID
      const appointmentInfo = await Appointments.findById(id);
  
      // If appointment is not found, send a 404 response
      if (!appointmentInfo) {
        return response.status(404).send({ message: 'Appointment not found' });
      }
  
      // Return the appointment details
      return response.status(200).send(appointmentInfo);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
router.put('/modify-appointments/:id', async (request, response) => {
    const { id } = request.params; // Use `id` instead of `_id`
    
    try {
      // Check for required fields
      if (!request.body.fees || !request.body.prescription) {
        return response.status(400).send({
          message: 'Send all required fields: fees, prescription',
        });
      }
  
      // Prepare the appointment update details
      const appointmentDetails = {
        prescription: request.body.prescription, // Corrected from description
        fees: request.body.fees, // Corrected from description
      };
  
      // Update the appointment by ID
      const appointmentInfo = await Appointments.findByIdAndUpdate(id, appointmentDetails, { new: true });
  
      if (!appointmentInfo) {
        return response.status(404).send({ message: 'Appointment not found' });
      }
  
      // Send success response
      return response.status(200).send({ message: 'Appointment updated successfully', data: appointmentInfo });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
router.get('/admin/all-appointments',async(request,response)=>{
    try{
        const appointmentList = await Appointments.find({});
        return response.status(200).json({
            count:appointmentList.length,
            data:appointmentList
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})
router.get('/my-appointments',async(request,response)=>{
    try{
        const { email } = request.query;
        const appointments = await Appointments.find({email});
        return response.status(200).json({
            // count:appointments.length,
            data:appointments
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.post('/admin-login',async(request,response)=>{
    try{
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({
                message: 'Send all required fields: Name,Email,Password',
            })
        }
        const adminDetails = {
            name : request.body.name,
            email : request.body.email,
            password : request.body.password,
        };
        const adminInfo = await Admin.create(adminDetails)
        return response.status(201).send(adminInfo)
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


router.get('/find-admin',async(request,response)=>{
    try{
        const { email, password } = request.query;
        const adminInfo = await Admin.findOne({ email, password });
        return response.status(200).json({
            data:adminInfo
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})

router.get('/appointment-info', async(request,response)=>{
    try{
        const { appointmentId } = request.query;
        const appointmentData = await Appointments.findById(appointmentId);
        return response.status(200).json({
            data:appointmentData
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


router.get('/alert', async(request,response)=>{
    try{
    const accountSid = 'AC58295fa0732b149c1e10e0a82a548c65';
    const authToken = 'c7334ae454634c8b7cf819c30d3762d3';
    const client = twilio(accountSid, authToken);

    client.messages
        .create({
            body: 'EMERGENCY ALERT!!! Doctor have Problem!!!',
            from: '+13347083108',
            // to: '+918148955789'
            // to: '+919787981210'
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error)); // Add a catch for error handling

        return response.status(201).send("Message Successfuly Sent!")

        }
    catch(error){
        console.log(error.message)
        response.status(500).send({message:error.message})
    }
})


export default router;