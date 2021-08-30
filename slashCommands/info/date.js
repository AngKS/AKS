
module.exports.run = async (interaction) => {
    const currDate = new Date()
    return interaction.channel.send(`Current Date: ${currDate.toLocaleString()}`)

}

module.exports.help = {
    name: 'date',
    aliases: ['d']
}