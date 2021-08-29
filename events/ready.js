
const client = require("../bot.js").Client
const {createCommand} = require("../dataHandler")
const { guildID } = require("../config.json")

client.on('ready', async () => {
    client.user.setPresence({ activities: [{ name: "127.0.0.1", type: "LISTENING" }] })
    console.log(`Logged in as ${client.user.tag}!`);
    createCommand(client, guildID)
});