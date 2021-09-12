
console.clear()

const Client = require('./structures/Client')

const { token } = require("./data/config.json")
const client = new Client()

client.start(token)