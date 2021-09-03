
module.exports.run = async (interaction, client, distube) => {

    // Check to see if user is in a voice channel
    console.log(interaction.user.voice)
    
    // console.log(distube) 
    
    return await interaction.reply({ content: "Currently Work in progress!" })

}

module.exports.help = {
    name: "play",
    aliases: ['p']
}