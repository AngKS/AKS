const { Intents, MessageAttachment, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require("../structures/Command")

module.exports = new Command({
    name: "newStudy",
    description: "Open AKS-Bot Study Extension",
    type: "SLASH",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {
        let buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Open in Browser")
                    .setStyle("Link")
                    .setURL("chrome-extension://obhomfmjlnppahldideknpjonfelokag/popup.html#")
            )
        let embed = new MessageEmbed()
            .setTitle("Open Extension")

        return message.channel.send({ embeds: [embed], components: [buttons] })
    }


})