import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import db from './config/mongo'

dotenv.config()

const PORT = process.env.PORT || 3002 

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

db().then()

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})