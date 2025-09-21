// const express = require('express')
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'

import noteRoutes from './routes/note.route.js'

dotenv.config()

const app = express()
const port =process.env.PORT ||4002

// app.get('/', (req, res) => {
//   res.send('Hello World! from Its me Dipa Bist')
// })

//database connection code 
try{
  mongoose.connect(process.env.MONGO_URL)
  console.log("Connected to MongoDB success!")
}catch(error){
  console.log("Error: Connecting to MongoDB", error)

}

//Routing Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
