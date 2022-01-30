const endpoint = require("express").Router()
const taskModule = require("../modules/tasks")

endpoint.get("", taskModule.all)
endpoint.post("", taskModule.add)
endpoint.delete("/:id", taskModule.delete)

module.exports = endpoint