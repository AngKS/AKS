
const client = require("../bot.js").Client
const distube = require("../bot.js").Distube


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    let slashCommands = client.slashCommands.get(interaction.commandName)
    try{
        if (slashCommands) slashCommands.run(interaction, client, distube)
    }
    catch{
        console.error('[ERROR HANDLER] - ', err)
        await interaction.reply({content: 'There was an error with the command', ephemeral:true})
    }



});


