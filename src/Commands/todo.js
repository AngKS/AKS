const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const Command = require("../structures/Command")
const {mongo} = require("../data/db.json")
const MongoClient = require('mongodb').MongoClient;
const clipboardy = require("clipboardy")
const { time } = require('@discordjs/builders')

let getTasks = async(username) => {
    MongoClient.connect(mongo).then(client =>{
        console.log('Database Connected!')
        const db = client.db("AKS_Bot")
        const collection = db.collection("users")

        collection.find().toArray().then(results => {
            let user = results.find(obj => obj.name === username)

            if (user){
                return user
            }
            else{
                return null
            }
        })
        
    })
}

let addTask = async(username, task) => {
    MongoClient.connect(mongo).then(client => {
        console.log('Database Connected')
        const db = client.db("AKS_Bot")
        const collection = db.collection("users")

        tasks.find().toArray().then(results => {
            let user = results.find(obj => obj.name === username)

            if (user) {
                collection.findOneAndUpdate(
                    {name : username},
                    {
                        $set : {
                            tasks : user.tasks.append(task)
                        }
                    },
                    {
                        upsert: true
                    }
                ).then(result => console.log(result)
                ).catch(err => console.log(err)
                )
            }
            else {
                collection.insertOne({
                    name: username,
                    level: 1,
                    koins: 0,
                    items: [],
                    tasks: user.tasks.append(task)
                }).then(result => {
                    console.log(result)
                    client.close()
                    
                }).catch(err => console.log(err))
            }
        })

        
    })
}

module.exports = new Command({
    name : "todo",
    description: "Your personal To-Do list in discord",
    type: "SLASH",
    slashCommandOptions: [{
        name : "subcomand",
        description: "list, add, remove, complete",
        type: "STRING",
        required: true
    },{
        name: "condition",
        description: "all, 'item name', index",
        type: "STRING",
        required: true
    }],
    permissions: "SEND_MESSAGES",
    run : async (message, args, client) => {
        let subCommand = args[1].toLowerCase()
        let condition = args[2].toLowerCase()


        let data = {
            001 : {
                task: "Task 01",
                status: "COMPLETED",
                created_at: new Date().toLocaleDateString()
            },
            002 : {
                task: "Task 02",
                status: "INCOMPLETE",
                created_at: new Date().toLocaleDateString()
            }
        }

        let subCommands = ['list', 'add', 'remove', 'complete']

        if (!subCommands.includes(subCommand)) return message.reply({content: "Please specify the correct parameters"})
        
        switch (subCommand) {
            case "list":
                // for(const [key, value] of Object.entries(data)){
                //     console.log(key, value)
                    
                // }

                console.log(await getTasks(message.user.username));
                break;
        
            default:
                break;
        }
        

    }
})