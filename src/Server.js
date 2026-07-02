import express from "express"
import ReadmeRoute from "./Route/ReadmeRoute.js"

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST  

app.use(express.json())
app.use(ReadmeRoute)

app.get("/",(req,res) =>{
    res.status(200).json({
        system: "Anthropic",
        ok:true
    })
})

app.listen(PORT, HOST, () => {
    console.log("Server ON!")
})