import mongoose from "mongoose";
export const connectDB = async ()=>{
    try {
        if(!process.env.MONGO_URL){
            throw new Error('MongoURl is not defined in .env file')
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected!')
    } catch (error) {
        console.error('Database Connection Failed: ',error);
        process.exit(1);
        
    }
}