const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

let doggoSpeech = ['bark', 'ruff', 'pupper', 'floof', 'lotsa', 'wag', 'heck', 'treat', 'fluff', 'hangry', 'spoof']
// Convertor
let doggoConvertor = (text) => {
    let tempText = []
    let dogeWords = { 1: 0, 0: 0 }
    let probability = 0.3
    let wordArr = text.split(" ")
    do {
        for (let word in wordArr) {
            let randNum = Math.floor(Math.random() * doggoSpeech.length)
            let change = Math.round(Math.random() * 1) + 0
            if (change === 1) {
                tempText.push(doggoSpeech[randNum])
                dogeWords[1]++
            }
            else {
                tempText.push(wordArr[word])
                dogeWords[0]++
            }
        }
    }
    while ((dogeWords[1] / text.length) > probability)

    if (tempText.join(" ") === text) doggoConvertor(text)
    return tempText.join(" ")
}

module.exports.run = async (interaction) => {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Show Original')
                .setCustomId('Original')
                .setStyle('SUCCESS')
        )
    const text = interaction.options.getString('text')
    let doggoText = doggoConvertor(text)
    const collector = interaction.channel.createMessageComponentCollector({ time: 15000, max: 1 })

    collector.on('collect', async i => {
        if (i.customId == 'Original') {
            await interaction.editReply(`[DOGGO] - ${doggoText}\n[ORIGINAL] - ${text}`)
        }

    })
    collector.on('end', () => {
        console.log("Revealed original text")
    })


    return await interaction.reply({ content: doggoText, components: [row] })

}

module.exports.help = {
    name: "convert",
    aliases: ['c'],
    genre: 'messages'
}