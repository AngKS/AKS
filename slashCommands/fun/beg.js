
const { Client, Intents, MessageAttachment } = require('discord.js');
const { mongo } = require("../database/db.json")
const Canvas = require('canvas');
const MongoClient = require('mongodb').MongoClient

let randomKoins = () => {
    return Math.floor(Math.random() * 100) + 1
}

let insertData = async (username, koins) => {
    MongoClient.connect(mongo).then(client => {
        console.log('Database Connected')
        const db = client.db('AKS_Bot')
        const USERS = db.collection("users")

        // Check to see if user in database
        USERS.find().toArray().then(results => {
            let user = results.find(obj => obj.name === username)
            if (user){
                USERS.findOneAndUpdate(
                    {name : username},
                    {
                        $set : {
                            koins : user.koins += koins
                        }
                    },
                    {
                        upsert : true
                    }
                ).then(result => console.log(result))
                .catch(err => console.error(err))
            }
            else{
                USERS.insertOne({
                    name: username,
                    level: 1,
                    koins: koins,
                    items: []
                }).then(result => {
                    console.log(result)
                    client.close()
                }).catch(err => console.error(err))
            }
        })

    })

}

module.exports.run = async (interaction) => {
    const canvas = Canvas.createCanvas(700, 300)
    const context = canvas.getContext('2d')

    let koinsEarned = randomKoins()
    console.log("Koins:", koinsEarned)
    // insert into database
    insertData(interaction.user.username, koinsEarned)

    // Draw background
    const background = await Canvas.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/points-bg.png?raw=true")
    context.drawImage(background, 0, 0, canvas.width, canvas.height)

    // Add user avatar
    const avatar = await Canvas?.loadImage(interaction.user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
    context.drawImage(avatar, 70, (canvas.height / 2) - 75, 150, 150)

    // Add coin animation
    const coin = await Canvas?.loadImage("https://github.com/AngKS/AKS/blob/master/slashCommands/assets/static-coin.png?raw=true")
    context.drawImage(coin, 450, 70, 200, 200)

    // Add text
    context.strokeRect(0, 0, canvas.width, canvas.height)
    context.font = '100px Roboto Mono'
    context.fillstyle = "#000000"
    context.fillText(`${koinsEarned}`, canvas.width / 2, (canvas.height / 2 + 50))

    const attachment = new MessageAttachment(canvas.toBuffer(), 'earned.png')
    await interaction.reply({ content: `Congratulations **${interaction.user.username}**. You just earned **${koinsEarned}** koins!!`, files: [attachment] })

}

module.exports.help = {
    name: "beg",
    aliases: ["b", "please"]
}