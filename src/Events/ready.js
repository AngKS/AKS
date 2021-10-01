const Event = require("../structures/Event")

module.exports = new Event("ready", (client) => {
    console.log(`${client.user.username} is now online`)

})