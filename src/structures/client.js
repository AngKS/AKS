const Discord = require("discord.js")
const Command = require("./Command.js")
const event = require("./event.js")

const {token, clientID, guildID, prefix} = require("../data/config.json")

const intents = new Discord.Intents(32767)

const fs = require("fs")

// Client Class

class Client extends Discord.Client{

    constructor(){
        super({ intents })
         this.commands = new Discord.Collection()
         this.prefix = prefix
    }

    start(token){
        const commandFiles = fs.readdirSync("./src/Commands").filter(file => file.endsWith(".js"))
        const commands = commandFiles.map(file => require(`../Commands/${file}`))
        commands.forEach(command => {
            console.log(`[INITIALIZE] -  ${command.name} command loaded`)
            this.commands.set(command.name, command)
        })

        const slashCommands = commands
            .filter(cmd => ["BOTH", "SLASH"].includes(cmd.type))
            .map(command => ({
                name : command.name.toLowerCase(),
                description: command.description,
                permissions : [],
                options : command.slashCommandOptions,
                defaultPermission: true
            }))

        // Event Handler
        this.removeAllListeners()

        this.on("ready", async () => {
            const cmds = await this.guilds.cache.get(guildID)?.commands.set(slashCommands)
            cmds.forEach(cmd => console.log(`[INITIALIZE] - ${cmd.name} SLASH command loaded`))
        })

        // Read events folder

        fs.readdirSync("./src/Events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const event = require(`../Events/${file}`)
                console.log(`[INITIALIZE] - ${event.event} loaded!`)
                this.on(event.event, event.run.bind(null, this))
                
            })

        // Login
        this.login(token)
    }

}

module.exports = Client