import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required :true,
        unique: true
    },
    email : {
        type: String,
        required :true,
        unique : true
    },
    country: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    city: {
        type: String,
        requied: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required :true
    }, 
    isAdmin : {
        type: Boolean,
        required: true,
        default:false
    },
},
{timestamps:true }
)

export default mongoose.model("User", UserSchema)