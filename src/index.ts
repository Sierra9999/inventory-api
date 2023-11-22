import express, { Request, Response } from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  const data = {
    name : 'inventory api',
    description : 'still in progress'
  }
  res.json(data)
})

app.post('/add-item',(req : Request, res: Response) => {
  const newItem = req.body
  res.json({response : newItem})
})

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})