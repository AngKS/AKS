
const client = require("../bot.js").Client


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    let slashCommands = client.slashCommands.get(interaction.commandName)
    if (slashCommands) slashCommands.run(interaction)

    

});