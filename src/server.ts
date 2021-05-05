import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import './infra/configs/dependency-injection'

import routes from './infra/configs/routes'
import errorInterceptor from './infra/interceptors/error.interceptor'
import './infra/database'

config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.use(errorInterceptor)
app.listen(process.env.PORT || 8000, () =>
  console.log('app running at port 8000')
)
