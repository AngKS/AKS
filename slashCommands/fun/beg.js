
const { Client, Intents, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async (interaction) => {
    const canvas = Canvas.createCanvas(700, 300)
    const context = canvas.getContext('2d')

    // Draw background
    const background = await Canvas.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/fun/assets/points-bg.png?raw=true")
    context.drawImage(background, 0, 0, canvas.width, canvas.height)

    // Add user avatar
    const avatar = await Canvas?.loadImage(interaction.user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
    context.drawImage(avatar, 70, (canvas.height / 2) - 75, 150, 150)

    // Add coin animation
    const coin = await Canvas?.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/fun/assets/coin.gif?raw=true")
    context.drawImage(coin, 470, canvas.height / 2, 100, 100)



    const attachment = new MessageAttachment(canvas.toBuffer(), 'earned.png')
    await interaction.reply({ files: [attachment] })

}

module.exports.help = {
    name: "beg",
    aliases: ["b", "please"]
}