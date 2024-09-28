import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [15, "Phone number cannot exceed 15 digits"]
    },
    message: {
        type: String,
        required: true,
        minlength: [10, "Message must be at least 10 characters long"]
    }
});
export const Message = mongoose.model("Message", messageSchema);
