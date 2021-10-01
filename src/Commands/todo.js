const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const Command = require("../structures/Command")
const { mongo } = require("../data/db.json")
const MongoClient = require('mongodb').MongoClient;
const clipboardy = require("clipboardy")
const { time } = require('@discordjs/builders')

let getTasks = async (username) => {
    MongoClient.connect(mongo).then(client => {
        console.log('Database Connected!')
        const db = client.db("AKS_Bot")
        const collection = db.collection("tasks")

        collection.find().toArray().then(results => {
            let tasks = results.find(obj => obj.user === username)

            if (tasks) {
                let allTasks = []
                allTasks.push(tasks)
                return allTasks
            }
            else {
                return null
            }
        })

    })
}

let addTask = async (task) => {
    MongoClient.connect(mongo).then(client => {
        console.log('Database Connected')
        const db = client.db("AKS_Bot")
        const collection = db.collection("tasks")

        collection.find().toArray().then(results => {
            let tasks = results.find(obj => obj.name === task.name)
            if (tasks) {
                return "Tasks already exists!"
            }
            else {
                collection.insertOne(task).then(result => {
                    console.log(result)
                    client.close()
                    return "Tasks successfully added!"

                }).catch(err => console.log(err))
            }
        })


    })
}

module.exports = new Command({
    name: "todo",
    description: "Your personal To-Do list in discord",
    type: "SLASH",
    slashCommandOptions: [{
        name: "subcomand",
        description: "list, add, remove, complete",
        type: "STRING",
        required: true
    }, {
        name: "condition",
        description: "all, 'item name', index",
        type: "STRING",
        required: true
    }],
    permissions: "SEND_MESSAGES",
    run: async (message, args, client) => {
        let subCommand = args[1].toLowerCase()
        let condition = args[2].toLowerCase()



        let subCommands = ['list', 'add', 'remove', 'complete']

        if (!subCommands.includes(subCommand)) return message.reply({ content: "Please specify the correct parameters" })

        switch (subCommand) {
            case "list":
                // for(const [key, value] of Object.entries(data)){
                //     console.log(key, value)

                // }
                let taskList = await getTasks(message.user.username)
                
                await getTasks(message.user.username).then(taskLists => message.channel.send({ content: taskLists === undefined ? "No result" : taskLists }))
            case "add":

                let newTask = {
                    name: "Task01",
                    user: message.user.username,
                    description: "lorem ipsum",
                    created_at: new Date().toLocaleDateString()
                }

                await addTask(newTask).then(addMsg => message.channel.send({ content: addMsg === undefined ? "No result" : addMsg }))
                

            default:
                break;
        }


    }
})