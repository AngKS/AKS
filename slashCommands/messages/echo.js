module.exports.run = async (interaction) => {
    const text = interaction.options.getString('text')
    return await interaction.reply({ content: text })
}

module.exports.help = {
    name: 'echo',
    aliases: ['e']
}