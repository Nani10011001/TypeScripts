import express, { Application,Request,Response } from "express"



const app: Application = express()

app.use(express.json())

const PORT=process.env.PORT || 4000
interface User {
    id: number;
    name: string;
    email: string;

}
const userDetails: User[] = [
{
id:2,
name: "nani",
email: "nani901422@gmail.com"

}
]
//Request<Params, ResBody, ReqBody, Query>
/* Request<A, B, C, D>

A → params
B → response
C → body
D → query */
app.get("/",(req:Request,res: Response)=>{
    res.send("welcome to typescript world")
    
})
app.get("/api/user",(req: Request, res: Response)=>{
    res.json(userDetails)
})
const serverStart = () => {
try {
    app.listen(PORT,()=>console.log(`server running at port${PORT}`))
} catch (error) {

    console.error(error)
    
}
}
serverStart()