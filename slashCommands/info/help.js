
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

module.exports.run = async (interaction) => {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Help')
                .setStyle('LINK')
                .setURL('https://angks.github.io')
        );

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