// const Discord = require("discord.js")
// const Canvas = require("canvas")
// const Command  = require("../structures/Command")


// module.exports = new Command({
//     name: "congrat",
//     description : "Creates a Simple congratulation banner for a user",
//     type: "BOTH",
//     slashCommandOptions : [{
//         name: "User",
//         description : "mention the user you want to congratulate",
//         type: "USER",
//     }],
//     permissions: "SEND_MESSAGES",
//     run : async (message, args, client) => {
//         // create a canvas
//         const canvas = Canvas.createCanvas(700, 250)
//         const context = canvas.getContext('2d')

//         // Since the image takes time to load, you should await it
//         const background = await Canvas.loadImage('https://github.com/AngKS/MakanBot/blob/master/doge.jpg?raw=true');

//         // draw background onto canvas
//         context.drawImage(background, 0, 0, canvas.width, canvas.height)

//         // Add user avatar
//         const avatar = await Canvas?.loadImage(message.options.getMember('username').user.displayAvatarURL({ format: 'png' || 'jpg' || 'gif', dynamic: true }))
//         context.drawImage(avatar, 25, canvas.height / 4, 125, canvas.height / 2)

//         // Add user message
//         // context.strokeStyle = "#fffff"
//         context.strokeRect(0, 0, canvas.width, canvas.height)
//         // Select font and font size
//         context.font = '60px Quicksand Bold'
//         context.fillstyle = '#ffffff'

//         context.fillText(`Congratulations!\n\t${message.options.getMember('username').user.username}`, canvas.width / 2.8, canvas.height / 2)

//         // Attached to message reply
//         const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'message.png')
//         await message.reply({ content: `CONGRATULATIONSSS!!! ${message.options.getMember('username').user}`, files: [attachment] })
//     }  
// })
