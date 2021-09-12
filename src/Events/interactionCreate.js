
const Event = require("../structures/Event.js")

module.exports = new Event("interactionCreate", (client, interaction) => {

    if (interaction.user.bot || !interaction.isCommand() || !interaction.guild) return

    const args = [
        interaction.commandName,
        ...client.commands
            .find(cmd => cmd.name.toLowerCase() == interaction.commandName)
            .slashCommandOptions.map(v => `${interaction.options.get(v.name).value}`)
    ]

    const command = client.commands.find(cmd => cmd.name.toLowerCase() === interaction.commandName)

    if (!command) return interaction.reply({ content: "That is not a valid interaction", ephemeral: true })

    const permissions = interaction.member.permissions.has(command.permission)
    if (!permissions) return interaction.reply({ contents: `You do not have the specific permission to execute this command!`, ephemeral: true })

    command.run(interaction, args, client)

})