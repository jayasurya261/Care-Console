import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        number:{
            type:String,
            required:true,
        },
        birth:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        language:{
            type:String,
            required:true,
        },
        imageName: {
            type: String,
            required: false
        },
        data: {
            type: Buffer, // Binary data
            required: false
        },
        contentType: {
            type: String, // To store the MIME type (e.g., 'image/jpeg')
            required: false
        }

    },
    {
        timestamps:true
    }
)
const appointmentsSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        prescription:{
            type:String,
            required:true
        },
        fees:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)
const tabletSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Tablet name
    category: { type: String, required: true },  // Category (e.g., brand, type)
    quantity: { type: Number, required: true },  // Current stock quantity
    lastUpdated: { type: Date, default: Date.now }  // Timestamp of last update
  });
  

  
  export const Tablet = mongoose.model('Tablet', tabletSchema);
  
 

export const User = mongoose.model('User',userSchema );
export const Appointments = mongoose.model('Appointments',appointmentsSchema );
































































































































































































































































const adminSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true
    }
)
export const Admin = mongoose.model('Admin',adminSchema );