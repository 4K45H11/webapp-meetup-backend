import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//local utility imports
import initializeDatabase from './db/db.conect.js'
import {createSpeaker} from './utils/speaker.util.js'
import{readAllEvents,readAllEventsByTag,readEventsByType,readEventsByTitle} from './utils/event.util.js'
import eventRoutes from './routes/get.route.js'


//loading environment variables
dotenv.config()

//connecting the database
initializeDatabase()

//database operations



//launching the server
const app = express()

const PORT = process.env.PORT
const corsOrigins = {
    origin:"*",
    methods:["POST","GET"],
    credentials:true
}

//middlewares
app.use(express.json())
app.use(cors(corsOrigins))
app.use('/events',eventRoutes)


app.get('/',(req,res)=>{
    res.send('Welcome to meetings server')
})



app.listen(PORT||3000,()=>console.log(`Server is running on port ${PORT}`))