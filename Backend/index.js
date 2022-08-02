const express = require("express")
const dotenv = require("dotenv")
const connect = require("./configs/db")
const userRouter = require("./routes/userRouter")

const app = express()
dotenv.config()
connect()
app.use(express.json())

app.use("/api/users",userRouter)
const PORT = process.env.PORT 
app.listen(PORT,console.log(`Listening to PORT ${PORT}`))