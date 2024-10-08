import express from 'express'
import { User,Appointments,Admin,Tablet } from '../models/models.js';
const router = express.Router();
import twilio from 'twilio';
import multer from 'multer';


//Route for Post user details
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.password ||
            !request.body.number ||
            !request.body.location ||
            !request.body.birth ||
            !request.body.language
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
            birth : request.body.birth,
            location : request.body.location,
            language : request.body.language,
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
router.delete('/deleteAppointment/:_id' ,async(request,response)=>{
    try{
        const {_id} = request.params;

        const result = await Appointments.findByIdAndDelete(_id);
        if(!result){
            return response.status(404).json({message:'Appointment Not found'})
        }
        return response.status(200).send({message:'Appointment deleted successfully'})

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
  


router.get('/alert', async(request,response)=>{
    try{
    const accountSid = 'AC58295fa0732b149c1e10e0a82a548c65';
    const authToken = 'c7334ae454634c8b7cf819c30d3762d3';
    const client = twilio(accountSid, authToken);

    client.messages
        .create({
            body: 'EMERGENCY ALERT!!! Doctor have Problem!!!',
            from: '+13347083108',
            to: '+918148955789'
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




//----------Inventary Management----------
router.post('/add-tablet', async (req, res) => {
    const { name, category, quantity } = req.body;
    
    try {
      const newTablet = new Tablet({ name, category, quantity });
      await newTablet.save();
      res.status(201).json({ message: 'Tablet added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding tablet', error });
    }
  });


  router.put('/updateTablet/:_id', async (req, res) => {
    const { _id } = req.params;
    const { name,category,quantity } = req.body;
    
    try {
      const tablet = await Tablet.findByIdAndUpdate(_id, {name,category, quantity, lastUpdated: Date.now() }, { new: true });
      if (!tablet) {
        return res.status(404).json({ message: 'Tablet not found' });
      }
      res.json({ message: 'Tablet quantity updated', tablet });
    } catch (error) {
      res.status(500).json({ message: 'Error updating tablet', error });
    }
  });
  
  router.get('/tablets', async (req, res) => {
    try {
      const tablets = await Tablet.find();
      res.json(tablets);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tablet data', error });
    }
  });
  router.get('/tablet/:_id', async (req, res) => {
    try {
        const {_id} = req.params;
      const tablets = await Tablet.findById(_id);
      res.json(tablets);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tablet data', error });
    }
  });
  
  router.delete('/deleteTablets/:_id' ,async(request,response)=>{
    try{
        const {_id} = request.params;

        const result = await Tablet.findByIdAndDelete(_id);
        if(!result){
            return response.status(404).json({message:'Tablet Not found'})
        }
        return response.status(200).send({message:'Tablet Info deleted successfully'})

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
  

//-----------------Images upload------------

const upload = multer({
    storage: multer.memoryStorage(), // Storing image in memory as a buffer
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
    fileFilter: (req, file, cb) => {
      // Validate file type (e.g., images only)
      if (!file.mimetype.startsWith('image/')) {
        return cb(new Error('File is not an image'), false);
      }
      cb(null, true);
    },
  });
  
  router.put('/upload/:id', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    // Validate ObjectId (basic check for valid MongoDB ObjectId)
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('Invalid user ID.');
    }
  
    try {
      // Find the user by ID and update their image fields
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          imageName: req.file.originalname,
          data: req.file.buffer, // Image stored as binary (Buffer)
          contentType: req.file.mimetype,
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).send('User not found.');
      }
  
      res.status(200).send(`Image updated for user with ID: ${updatedUser._id}`);
    } catch (error) {
      console.error('Error updating the image:', error);
      res.status(500).send('Error updating the image.');
    }
  });

export default router;