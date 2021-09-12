const { Intents, MessageAttachment, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require("../structures/Command")


module.exports = new Command({
    name: "study",
    description: "AKS Bot study thread",
    type: "SLASH",
    slashCommandOptions: [],
    run: async (message, args, client) => {

        // Creating the personal Study Thread
        const studyThread = await message.channel.threads.create({
            name: `${message.user.username}'s Study thread!`,
            autoArchiveDuration: 60,
            reason: `${message.user.username} needs to study!`
        }).then(async (thread) => {
            thread.members.add(message.user.id)

            // Welcome embed buttons
            let welcomeRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel("Pomodoro")
                        .setStyle("DANGER")
                        .setCustomId("pomo")
                )
                .addComponents(
                    new MessageButton()
                        .setLabel("TO-DO List")
                        .setStyle("LINK")
                        .setURL("https://www.github.com/angks/aks")
                )
                .addComponents(
                    new MessageButton()
                        .setLabel("Flash Card")
                        .setStyle("PRIMARY")
                        .setCustomId("fc")
                )

            // Welcome Embed
            let welcomeEmbed = new MessageEmbed()
                .setTitle(`Hey **${message.user.username}**, This thread is created specifically to help you study!`)
                .setThumbnail(message.user.avatarURL({ dynamic: true }))
                .setColor("#fffff")
                .setDescription("These are the different Commands you can use in this thread.")
                .setFields(
                    { name: "Pomodoro", value: "Pomodoro timer to keep you focused while farming some koins!" },
                    { name: "TODO", value: "Your personal To-Do List!" },
                    { name: "Flashcard", value: "Quiz yourself with custom flashcards!" },

                )
                .setTimestamp()




            thread.send({ embeds: [welcomeEmbed], components: [welcomeRow] })
        })


    }
})