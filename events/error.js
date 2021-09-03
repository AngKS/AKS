const client = require("../bot.js").Client

client.on("unhandledRejection", (err) => {
    console.log(`[UNHANDLED PROMISE REJECTION] - ${err}`)
    return client.channel.reply({content: "There was an API Error!"})
    
})