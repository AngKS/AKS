
const client = require("../bot.js").Client
const { createCommand } = require("../dataHandler")
const { token,guildID } = require("../config.json")




client.on('ready', async () => {
    const names = ["127.0.0.1", "/help", "vege-cast", "Kah Shin"]
    const types = ["LISTENING", "PLAYING", "STREAMING", "COMPETING"]

    client.user.setPresence({ activities: [{ name: names[0], type: "LISTENING" }] })
    setInterval(() => {
        let randNum = Math.floor(Math.random() * names.length)
        client.user.setPresence({ activities: [{ name: names[randNum].toString(), type: types[Math.floor(Math.random() * types.length)] }] })
    }, 5000);

    console.log(`Logged in as ${client.user.tag}!`);
    createCommand(client, guildID)

    

});

