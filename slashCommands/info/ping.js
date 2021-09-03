const { Message } = require("discord.js")

module.exports.run = async (interaction) => {
    const adjectives = ["Why the fk did you talk to me?", "STFU I'm Busy", "Go find out yourself idiot!"]
    var adj = Math.floor(Math.random() * adjectives.length) + 1
    return interaction.channel.send("Pinging")


}

module.exports.help = {
    name: 'ping',
    aliases: [],
    genre: 'info'
}