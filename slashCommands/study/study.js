const { Client, Intents, MessageAttachment, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const seconds = 1000
const minutes = 60 * seconds
const hour = 60 * minutes

var start_time
var end_time

let startPOMO = async(channel) =>{
    // Countdown clock
    let remTime = 25
    let remCount = 1
    let status = 'STUDYING'

    let countdownEmbed = new MessageEmbed()
        .setTitle('POMODORO Session')
        .setColor("#DA344D")
        .setThumbnail("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/Clock.gif?raw=true")
        .addField(`STATUS: ${status}`, `Session Started with ${remTime} minutes` )
    let countdown = await channel.send({embeds : [countdownEmbed]})

    const collector = channel.createMessageComponentCollector()
    collector.on('collect', async i => {
        if (i.customId == 'start') {
            startPOMO(channel)
        }
        if (i.customId == 'stop') {
            end_time = new Date().getTime()
            diff = end_time - start_time
            console.log(`Session active for ${Math.floor(diff / 1000 % 60)} seconds`)
            countdown.delete()
            return channel.send(`POMODORO Session has stopped.`)
        }
    })


    // let countdown = await channel.send(`Session Started with ${remTime} minutes ::${status}::`)
    let clock = setInterval(async() => {
        remTime--
        if (remTime == 1) remCount++

        let newEmbed = new MessageEmbed()
            .setTitle('POMODORO Session')
            .setColor("#DA344D")
            .setThumbnail("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/Clock.gif?raw=true")
            .addField(`status: [${status}]`, `Session Started with ${remTime} minutes`)

        await countdown.edit({embeds : [newEmbed]})
        if (remCount == 10) clearInterval(clock)

        if (remTime == 0 && remCount % 2 == 0) {
            status = 'TIMEOUT'
            remTime += 5
        }
        else if (remTime == 0 && remCount == 9) {
            remTime += 20
            status = 'STUDYING'
        }
        else if (remTime == 0) {
            remTime += 25
            status = 'STUDYING'
        }
    }, 1 * minutes);

}


module.exports.run = async(interaction) => {
    const thread = await interaction.channel.threads.create({
        name : `${interaction.user.username} Study Thread`,
        autoArchiveDuration : 60,
        reason : `${interaction.user.username} needs help with studying!`
    }).then(async(result) => {
        result.members.add(interaction.user.id)
        result.send(`Hey **${interaction.user.username}**, This thread is created specifically to help you study!`)
        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Start')
                    .setStyle('SUCCESS')
                    .setCustomId('start')
            )
            .addComponents(
                new MessageButton()
                    .setLabel('Stop')
                    .setStyle('DANGER')
                    .setCustomId('stop')
            )
        
        let embedCreator = new MessageEmbed()
            .setColor('#fffff')
            .setTitle("Pomodoro Session")
            .setDescription("Press the start button to start the pomodoro timer")
        result.send({embeds : [embedCreator], components : [row]})
        
        const collector = result.createMessageComponentCollector({ time: 30000, max: 1 })
        collector.on('collect', async i => {
            if (i.customId == 'start') {
                start_time = new Date().getTime()
                
                startPOMO(result)
            }
            if (i.customId == 'stop') {

                return channel.send(`POMODORO Session has stopped.`)
            }
        })
        
    })
    

}

module.exports.help ={
    name : "study",
    description : "Study command to start a study session"
}