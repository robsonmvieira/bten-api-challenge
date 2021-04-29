import { config } from 'dotenv'
import express from 'express'
import './infra/database'

import 'reflect-metadata'
import './infra/configs/dependency-injection'
import routes from './infra/configs/routes'

config()

const app = express()
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 8000, () =>
  console.log('app running at port 8000')
)
