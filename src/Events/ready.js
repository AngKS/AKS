const Event = require("../structures/Event")

module.exports = new Event("ready", (client) => {
    console.log(`${client.username} is now online`)

})