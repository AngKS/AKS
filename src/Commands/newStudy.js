const { Intents, MessageAttachment, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require("../structures/Command")
const discordVoice = require('@discordjs/voice');
const Discord = require("discord.js")

/* 
    Study Channels:
        - #812662109691183124
        - #724258870180184096
        - #786608171141693441
*/

module.exports = new Command({
    name: "newStudy",
    description: "AKS Bot study thread",
    type: "SLASH",
    slashCommandOptions: [],
    run: async (message, args, client) => {

        let studyChannels = [
            "<#812662109691183124>",
            "<#724258870180184096>",
            "<#786608171141693441>",
            "<#892330155647848478>"
        ]

        // let studyChannels = "<#892330155647848478>"

        if (!message.member.voice.channel) return message.reply("❌ | **You must be in a Study Voice channel to use the Study command**");
        if (!studyChannels.includes(message.member.voice.channel.toString())) return message.channel.send("**Please be in a Study call!**")
        console.log(`${message.user.username} in ${message.member.voice.channel.name}`)

        
        const player = discordVoice.createAudioPlayer()
        const resource = discordVoice.createAudioResource()

        const connection = discordVoice.joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        
        player.play()
        connection.subscribe(player)

        player.on(discordVoice.AudioPlayerStatus.Idle, () => {
            connection.destroy()
        })


    }
})