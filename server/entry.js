
const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')

require("./database/init")
// endpoints imports
const taskEndpoint = require("./services/service.task")

// local scope variables
const port = process.env.PORT || 9000

// express server
server = express()

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

// morgan logger endpoint
server.use(morgan("common"))


// server middlewares for endpoints
server.use("/tasks", taskEndpoint)

// uptime method
const upTime = () => {
    console.log("Server on localhost:", port)
}

server.listen(port, upTime)