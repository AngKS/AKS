
const Command = require("../structures/Command")
const Discord = require("discord.js")

module.exports = new Command({
    name: "prune",
    description: "Use this command to clear n-number of message(s)",
    type: "BOTH",
    slashCommandOptions: [{
        name: 'amount',
        description: "The amount of messages to be cleared",
        type: "INTEGER",
        required: true
    }],
    permissions: "MANAGE_MESSAGES",
    run: async (message, args, client) => {
        const amount = args[1]

        if (!amount || isNaN(amount)) return message.reply(`${amount === undefined ? "Wow you don't even know numbers?" : "I guess you don't know how to fucking count!"}`)

        const amountParsed = parseInt(amount)

        if (amountParsed > 100) return message.reply({ content: `My dude, there's only so much i can do... *(max. 100 messages)*` })

        message.channel.bulkDelete(amountParsed)

        const msg = await message.channel.send(`Successfully cleared ${amountParsed} messages!`)

        if (msg) setTimeout(() => { msg.delete() }, 5000)

    }

})