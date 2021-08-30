const { Client, Intents, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const { MongoClient } = require('mongodb');
const {mongo} = require("../database/db.json")


const applyText = (canvas, text) => {
    const context = canvas.getContext('2d')
    let fontSize = 70

    do {
        context.font = `${fontSize -= 10}px Quicksand Bold`

    } while (context.measureText(text).width > 485)

    return context.font
}



module.exports.run = async (interaction) => {

    let _user = interaction.options.getMember('user') === null ? interaction.user : interaction.options.getMember('user').user

    const canvas = Canvas.createCanvas(550, 700)
    const context = canvas.getContext('2d')

    const userCoinX = 215
    // draw background
    const background = await Canvas.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/profile-BG.png?raw=true")
    context.drawImage(background, 0, 0, canvas.width, canvas.height)


    // Add user avatar
    const avatar = await Canvas?.loadImage(_user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
    context.drawImage(avatar, 80, 100, 200, 200)

    // Add info
    context.font = applyText(canvas, _user.username)
    context.fillStyle = "#fffff"
    context.fillText(`${_user.username}`, 300, 200)

    // Add coin picture
    const coin = await Canvas?.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/static-coin.png?raw=true")
    context.drawImage(coin, userCoinX + 80, 350, 100, 100)

    MongoClient.connect(mongo).then(client => {
        console.log('[MONGO] - DATABASE CONNECTED')
        const db = client.db("AKS_Bot")
        const USERS = db.collection("users")

        USERS.find().toArray().then(results => {
            let user = results.find(obj => obj.name === _user.username)

            if (user){
                context.font = ('60px Quicksand Bold')
                context.fillText(user.level, 300, 330)
                context.fillText(user.koins, userCoinX, 420)
                const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png')
                return interaction.reply({ files: [attachment] })
            }
            else{
                context.font = ('60px Quicksand Bold')
                context.fillText("1", 300, 330)
                context.fillText(0, userCoinX, 420)
                const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png')
                return interaction.reply({ files: [attachment] })
            }

        })
        
    }).then(() => {

        
    })


    
}

module.exports.help = {
    name: "profile",
    aliases: ['p', 'prof']
}