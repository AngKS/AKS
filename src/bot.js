
console.clear()

const Client = require('./src/structures/client')

const { token } = require("./config.json")

const client = new Client()
client.start(token)