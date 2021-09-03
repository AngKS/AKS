
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const fs = require('fs')

let commands = async () => {
    fs.readdir("../../slashCommands", (err, files) => {
        console.log(files)

    })
}

module.exports.run = async (interaction, client) => {
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
    client.slashCommands.map(command => {
        console.log(command)

    })



    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`AKS Bot's Help Menu`)
        .setURL('https://discord.js.org')
        .setDescription('Some description here');
    await interaction.reply({ embeds: [embed], components: [row] });

}

module.exports.help = {
    name: "help",
    aliases: ['h']
}