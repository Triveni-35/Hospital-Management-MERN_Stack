import mongoose from "mongoose"
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HOSPITAL_MANAGEMENT"
    }).then(()=>{
        console.log("DB Connected successfully")
    })
    .catch((err)=>{
    console.log("Error : DB Conection failed ")
    })
}