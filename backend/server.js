import 'dotenv/config'
import express from 'express'
import { connectDB } from './config/db.js';
const app = express();
await connectDB()
app.use('/',(req,res)=>{
    res.send('Hello from Express')
})
const PORT = process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})