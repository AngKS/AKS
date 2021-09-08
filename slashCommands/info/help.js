
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const fs = require('fs')

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
            

    let funCommands = client.slashCommands.filter(cmnd => cmnd.help.genre === 'fun')
    // let funCommands = client.slashCommands.filter(cmnd => cmnd.help.genre === 'fun')
    console.log(funCommands)






    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`AKS Bot's Help Menu`)
        .setURL('https://discord.js.org')
        .addFields(
            { name: client.slashCommands, values: client.slashCommands.help }
        )
        .setDescription('Some description here');


    // await interaction.reply({ embeds: [embed], components: [row] });

}

module.exports.help = {
    name: "help",
    aliases: ['h'],
    genre: 'info'
}