const routes = require('./app/routes/routes')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

// firebase

const server = require('http').Server(app)

//settings
app.set('port', process.env.PORT || 8002)

//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', [routes])

server.listen(app.get('port'), () => {
  console.log('listening on', app.get('port'))
})

