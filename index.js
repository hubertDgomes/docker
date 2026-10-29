import express from 'express'
import dbConnector from './config/dbConnector.js'
import router from './routes/allRoutes.js'
import cors from 'cors'
const app = express()

const PORT = 5050

app.use(express.json())

app.use(cors({
    origin : "http://localhost:5173"
}))

app.get("/",(req,res)=>{
    res.json({message : "The server is running."})
})


dbConnector()
app.use("/api" , router)

app.listen(PORT,()=> {
    console.log("ldfdhfdf");
})