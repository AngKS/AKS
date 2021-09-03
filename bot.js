const { Client, Intents, Collection } = require('discord.js');
const { prefix, token, clientID, guildID } = require("./config.json")
const { mongo } = require("./slashCommands/database/db.json")
const MongoClient = require('mongodb').MongoClient

// Distube for music
const Distube = require("distube")

const fs = require('fs');

const client = new Client({
    // intents: [Intents.FLAGS.GUILDS],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
});

const distube = new Distube.default(client)

client.aliases = new Collection()
client.events = new Collection()
client.slashCommands = new Collection()
client.Users = new Collection()

module.exports.Client = client
module.exports.Distube = distube

// Events handler
fs.readdir(`./events/`, (err, files) => {
    if (err) throw err

    let jsFiles = files.filter(f => f.split(".").pop() === 'js')
    if (jsFiles.length <= 0) return console.log('[EVENT HANDLER] - No events found!')
    let check = false
    jsFiles.forEach(file => {
        const eventGet = require(`./events/${file}`)
        try {
            client.events.set(eventGet.name, eventGet)
            if (check == false) {
                console.info(`[EVENT HANDLER] - ${file} was loaded`)
                check = true
            }

        } catch (err) {
            return console.log(err)
        }

    })
})

// Slash Command Handler with aliases

fs.readdirSync(`./slashCommands/`).forEach(dir => {
    fs.readdir(`./slashCommands/${dir}`, (err, files) => {
        if (err) throw err

        let jsFiles = files.filter(f => f.split(".").pop() === 'js')
        if (jsFiles.length <= 0) return console.log('[SLASH HANDLER] - No slashCommands found!')
        jsFiles.forEach(file => {
            let fileGet = require(`./slashCommands/${dir}/${file}`)
            console.warn(`[SLASH HANDLER] - ${file} loaded!`)

            try {
                client.slashCommands.set(fileGet.help.name, fileGet)
            }
            catch (err) {
                return console.log(err)
            }

        })
    })
})



client.login(token);