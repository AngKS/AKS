const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const Command = require("../structures/Command")


module.exports = new Command({
    name: "help",
    description: "AKS-Bot's Help Menu",
    type: "BOTH",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Visit AKS')
                    .setStyle('LINK')
                    .setURL('https://angks.github.io')
            )
            .addComponents(
                new MessageButton()
                    .setLabel('Docs')
                    .setStyle('LINK')
                    .setURL('https://github.com/angks/aks')
            )
        console.log(client.guild)

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`AKS Bot's Help Menu`)
            .setURL('https://discord.js.org')
            .setDescription('Some description here');
        await message.reply({ embeds: [embed], components: [row] });

    }
})