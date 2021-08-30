const { Client, Intents, MessageAttachment } = require('discord.js');

module.exports.run = async(interaction) => {

    const thread = await interaction.channel.threads.create({
        name : `${interaction.user.username} Study Thread`,
        autoArchiveDuration : 60,
        reason : `${interaction.user.username} needs help with studying!`
    }).then(async(result) => {
        result.send("Hello there!")
        
        // Join the thread
        let t = interaction.channel.threads.cache.find(thread => thread.name === `${interaction.user.username} Study Thread`)
        if (t.joinable) await t.join()
    })
    

    

}

module.exports.help ={
    name : "study",
    description : "Study command to start a study session"
}