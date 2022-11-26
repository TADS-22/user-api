import 'express-async-errors'
import cors from 'cors'
import express from 'express'
import { userRouter } from './modules/users/router'
import { errorHandler } from './modules/commons/middlewares/error'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)

app.use(errorHandler)

app.listen(3001, () => console.log('Server is up!'))
