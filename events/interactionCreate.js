
const client = require("../bot.js").Client
const distube = require("../bot.js").Distube
const {token} = require("../config.json")


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
    

    distube.on('error', (channel, err) => {
        console.log('[DISTUBE ERROR] - ', err)
        return channel.send({ content: 'An Error has ocurred!' })

    })


});

client.on('error', async () => {
    console.log('An error has occured!')
    client.login(token)

})
