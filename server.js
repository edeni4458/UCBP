const express = require('express')
const app = express()
const cors = require('cors')

const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



require('./config/mongoose.config')

const Routes = require('./routes/podweb.routes')
Routes(app)

app.listen(port, () => console.log(`Welcome to Outer Haven, this is bridge port ${port}`))