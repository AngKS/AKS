const { Client, Intents, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async (interaction) => {

    // create a canvas
    const canvas = Canvas.createCanvas(700, 250)
    const context = canvas.getContext('2d')

    // Since the image takes time to load, you should await it
    const background = await Canvas.loadImage('https://github.com/AngKS/MakanBot/blob/master/doge.jpg?raw=true');

    // draw background onto canvas
    context.drawImage(background, 0, 0, canvas.width, canvas.height)

    // Add user avatar
    try{
        const avatar = await Canvas?.loadImage(interaction.options.getMember('username').user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
        context.drawImage(avatar, 25, canvas.height / 4, 125, canvas.height / 2)
    }
    catch (err){
        const avatar = await Canvas?.loadImage(interaction.user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
        context.drawImage(avatar, 25, canvas.height / 4, 125, canvas.height / 2)
    }
    

    // Add user message
    // context.strokeStyle = "#fffff"
    context.strokeRect(0, 0, canvas.width, canvas.height)
    // Select font and font size
    context.font = '60px Quicksand Bold'
    context.fillstyle = '#ffffff'
    console.log(interaction.options.getMember('username'))
    context.fillText(`Congratulations!\n\t${interaction.options.getMember('username') === null ? interaction.user.username : interaction.options.getMember('username').user.username}`, canvas.width / 2.8, canvas.height / 2)

    // Attached to interaction reply
    const attachment = new MessageAttachment(canvas.toBuffer(), 'interaction.png')
    await interaction.reply({ content: `CONGRATULATIONSSS!!! ${interaction.options.getMember('username') === null ? interaction.user.username : interaction.options.getMember('username').user.username}` , files: [attachment] })
}

module.exports.help = {
    name: 'congratulate',
    aliases: ['congrat', 'congrats'],
    genre: 'fun'
}