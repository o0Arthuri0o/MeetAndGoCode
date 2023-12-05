const express = require('express')
const userRouter = require('./routes/user.routes')
const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', userRouter)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))