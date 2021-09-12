const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const Command = require("../structures/Command")


module.exports = new Command({
    name: "info",
    description: "Information about AKs-Bot",
    type: "SLASH",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Visit me')
                    .setStyle('LINK')
                    .setURL('https://angks.github.io')
            );

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Hi, I am AKS Bot`)
            .setURL('https://ww.github.com/angks')
            .setDescription('Some description here')
            .setFooter(`Requested by ${message.member.displayName}`, message.user.displayAvatarURL())
        await message.reply({ embeds: [embed], components: [row] });


    }
})