
const { Client, Intents, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

let randomKoins = () =>{
    return Math.floor(Math.random() * 100) + 1
}

module.exports.run = async (interaction) => {
    const canvas = Canvas.createCanvas(700, 300)
    const context = canvas.getContext('2d')

    let koinsEarned = randomKoins()

    // Draw background
    const background = await Canvas.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/fun/assets/points-bg.png?raw=true")
    context.drawImage(background, 0, 0, canvas.width, canvas.height)

    // Add user avatar
    const avatar = await Canvas?.loadImage(interaction.user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
    context.drawImage(avatar, 70, (canvas.height / 2) - 75, 150, 150)

    // Add coin animation
    const coin = await Canvas?.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/fun/assets/static-coin.png?raw=true")
    context.drawImage(coin, 450, 70, 200, 200)

    // Add text
    context.strokeRect(0, 0, canvas.width, canvas.height)
    context.font = '100px Roboto Mono'
    context.fillstyle = "#000000"
    context.fillText(`${koinsEarned}`, canvas.width / 2 ,(canvas.height / 2 + 50))

    const attachment = new MessageAttachment(canvas.toBuffer(), 'earned.png')
    await interaction.reply({content: `Congratulations ${interaction.user}. You just earned **${koinsEarned}** koins!!` , files: [attachment] })

}

module.exports.help = {
    name: "beg",
    aliases: ["b", "please"]
}