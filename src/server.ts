import express, {Request, Response} from 'express'
import dotenv from 'dotenv'


dotenv.config()

const server = express()

server.use(express.urlencoded({extended:true}))

server.listen(process.env.PORT)

server.use((req:Request, res: Response) =>{
    res.status(404)

    res.json({error: 'endpoint não encontrado'})
})



