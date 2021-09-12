
const Event = require("../structures/Event")

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return

    if (!message.content.startsWith(client.prefix)) return

    const args = message.content.slice(client.prefix.length).trim().split(/ +/)
    const command = client.commands.find(cmd => cmd.name === args[0])

    if (!command) return message.reply({ content: `${args[0]} is not a valid command!` })
})