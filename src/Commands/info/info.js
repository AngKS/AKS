
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

module.exports.run = async (interaction) => {
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
        .setFooter(`Requested by ${interaction.member.displayName}`, interaction.user.displayAvatarURL())
    await interaction.reply({ embeds: [embed], components: [row] });

}

module.exports.help = {
    name: 'info',
    aliases: [],
    genre: 'info'
}