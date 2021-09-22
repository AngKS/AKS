const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const Command = require("../structures/Command")

module.export = new Command({
    name: "translate",
    description: "Language translation service (currently only supports KR)",
    type: "SLASH",
    slashCommandOptions: [{
        name: "text",
        description: "Text to be translated",
        type: "STRING",
        required: true
    }],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {
        return message.sen({ content: "Work in progress!" })
    }
})