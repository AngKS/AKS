
let createCommand = async (client, guildID) => {
    const DATA = [

        // Info command
        {
            name: 'info',
            description: 'Get to know more about AKS',

        },

        // Echo command
        {
            name: 'echo',
            description: 'Echoes whatever you typed',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Echoes the user input',
                required: true
            }]
        },

        // Ping command
        {
            name: 'ping',
            description: 'Reply with pong!'
        },
        // Convert text to doggo lingo
        {
            name: 'convert',
            description: 'Converts whatever you input into doggo lingo',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Input the text to be converted',
                required: true
            }]
        },
        // Help menu command
        {
            name: 'help',
            description: 'Shows you all the help you will need!'
        },
        // Congratulate comand
        {
            name: 'congratulate',
            description: 'Creates a banner to congratulate the user with a custom message',
            options: [{
                name: 'username',
                type: 'USER',
                description: 'Input the name of the person you want to congratulate'
            }]
        },
        // Get Datetime command
        {
            name: "date",
            description: "The bot will return the current date time to you."
        },
        // Generate Doggo Ipsum Command
        {
            name: "doggo",
            description: "The bot will generate a paragraph of Doggo Lingo placeholder text.",
            options: [{
                name: "doggo",
                type: "INTEGER",
                description: "Input the amount of paragraphs you want to generate(max. 3)"
            }]
        },
        // Beg for koins command
        {
            name: "beg",
            description: "You will receive a random amount of koins."
        },
        // Get user profile
        {
            name: "profile",
            description: "View user profile card",
            options : [{
                name : "user",
                type: "USER",
                description: "Gets the profile of the user specified."
            }]
        }

    ]

    await client.guilds.cache.get(guildID)?.commands.set(DATA)
}

module.exports = { createCommand }