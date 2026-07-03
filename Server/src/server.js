import express from "express"
import ReadmeRoute from "./Route/ReadmeRoute.js"
import MiddlewareCros from "./middleware/MiddlewareCros.js"


//configuracoes basicas de servidor
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST  

app.use(express.json())
app.use(ReadmeRoute)

//CORS AUTORIZACAO
app.use(MiddlewareCros.cors)

app.get("/",(req,res) =>{
    res.status(200).json({
        system: "Anthropic",
        ok:true
    })
})

app.listen(PORT, HOST, () => {
    console.log("Server ON!")
})

//exportando app para vercel.json()
export default app