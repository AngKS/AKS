
const client = require("../bot.js").Client
const {token} = require("../config.json")


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    let slashCommands = client.slashCommands.get(interaction.commandName)
    try{
        if (slashCommands) slashCommands.run(interaction, client)
    }
    catch{
        console.error('[ERROR HANDLER] - ', err)
        await interaction.reply({content: 'There was an error with the command', ephemeral:true})
    }
    

});
client.on('error', async () => {
    console.log('An error has occured!')
    client.login(token)

})
