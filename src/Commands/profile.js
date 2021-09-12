const { Intents, MessageAttachment, CommandInteraction } = require('discord.js');
const Canvas = require('canvas');
const { MongoClient } = require('mongodb');
const { mongo } = require("../data/db.json")
const Command = require("../structures/Command.js")

const applyText = (canvas, text) => {
    const context = canvas.getContext('2d')
    let fontSize = 70

    do {
        context.font = `${fontSize -= 10}px Quicksand Bold`

    } while (context.measureText(text).width > 485)

    return context.font
}

module.exports = new Command({
    name: "profile",
    description: "Gets the user profile card",
    type: "SLASH",
    slashCommandOptions: [],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {

        let _user = message instanceof CommandInteraction ? message.user : message.author
        const canvas = Canvas.createCanvas(550, 700)
        const context = canvas.getContext('2d')
        console.log(_user)

        const userCoinX = 215
        // draw background
        const background = await Canvas.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/profile-BG.png?raw=true")
        context.drawImage(background, 0, 0, canvas.width, canvas.height)


        // Add user avatar
        const avatar = await Canvas?.loadImage(_user.avatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
        context.drawImage(avatar, 80, 100, 200, 200)

        // Add info
        context.font = applyText(canvas, _user.username)
        context.fillStyle = "#fffff"
        context.fillText(`${_user.username}`, 300, 200)

        // Add coin picture
        const coin = await Canvas?.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/static-coin.png?raw=true")
        context.drawImage(coin, userCoinX + 80, 350, 100, 100)

        MongoClient.connect(mongo).then((err, client) => {
            if (err) return message.reply("There was a Database error!")
            console.log('[MONGO] - DATABASE CONNECTED')
            const db = client.db("AKS_Bot")
            const USERS = db.collection("users")

            USERS.find().toArray().then((err, results) => {
                if (err) return message.reply("There was a Database error!")
                let user = results.find(obj => obj.name === _user.username)

                if (user) {
                    context.font = ('60px Quicksand Bold')
                    context.fillText(user.level, 300, 330)
                    context.fillText(user.koins, userCoinX, 420)
                    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png')
                    return message.reply({ files: [attachment] })
                }
                else {
                    context.font = ('60px Quicksand Bold')
                    context.fillText("1", 300, 330)
                    context.fillText(0, userCoinX, 420)
                    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png')
                    return message.reply({ files: [attachment] })
                }

            })

        }).then(() => {


        })


    }
})
