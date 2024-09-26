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