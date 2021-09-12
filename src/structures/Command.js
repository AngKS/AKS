const Client = require("./client")

const Discord = require("discord.js")

const runFunction = (message, args, client) => {}

class Command {
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.permissions = options.permissions
        this.type = ["BOTH", "SLASH", "TEXT"].includes(options.type)? options.type : "TEXT"
        this.slashCommandOptions = options.slashCommandOptions || []
        this.run = options.run
    }
}

module.exports = Command