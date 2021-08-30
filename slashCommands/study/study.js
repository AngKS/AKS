const { Client, Intents, MessageAttachment, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.run = async(interaction) => {
    const thread = await interaction.channel.threads.create({
        name : `${interaction.user.username} Study Thread`,
        autoArchiveDuration : 60,
        reason : `${interaction.user.username} needs help with studying!`
    }).then(async(result) => {
        result.members.add(interaction.user.id)
        result.send(`Hey **${interaction.user.username}**, This thread is created specifically to help you study!`)
        
        let embedCreator = new MessageEmbed()
        .setColor("#fffff")
        .setTitle(`25 minutes POMODORO session`)
        .setThumbnail()
        
    })
    

    

}

module.exports.help ={
    name : "study",
    description : "Study command to start a study session"
}