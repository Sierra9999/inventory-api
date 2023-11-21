import express, { Request, Response } from "express"

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  const data = {
    name : 'inventory api',
    description : 'still in progress'
  }
  res.json(data)
})

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})