const client = require("../bot.js").Client
const { prefix } = require("../config.json")

client.on('messageCreate', async message => {
    if (message.author.bot || message.channel.type == 'DM') return
    let PREFIX = prefix

    let messageArr = message.content.trim().split(/ +/)
    let cmd = messageArr[0]
    let args = messageArr.slice(1)
    // console.info(`[USER INPUT] - ${messageArr}`)

    let commands = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if (commands) {
        if (!message.content.startsWith(Prefix)) return
        commands.run(client, message, args, prefix)
    }


})