
const Command = require("../structures/Command")
const Discord = require("discord.js")

module.exports = new Command({
    name: "ping",
    description: "Ping command to test the Bot's response time",
    type: 'BOTH',
    slashCommandOptions: [],
    permission: "SEND_MESSAGES",
    run: async (message, args, client) => {
        const m = await message.reply(`Ping: ${client.ws.ping} ms`)
        const msg = message instanceof Discord.CommandInteraction ? await message.fetchReply() : m

        msg.edit(`Ping: ${client.ws.ping} ms`)
    }
})