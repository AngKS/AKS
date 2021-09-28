const {mongo} = require("./src/data/db.json")
const MongoClient = require('mongodb').MongoClient



let insertCat = async (category, callback) => {
    (await MongoClient.connect(mongo)).withSession(client => {
        console.log('Database connected')
        let db = client.db("AKS_Bot")
        let collection = db.collection("category")
        collection.find().toArray().then(results => {
            let cat = results.find(obj => obj.name === category.name)
            if (cat){
                return callback("ITEM ALREADY EXISTS", null)
            }
            else{
                collection.insertOne(category).then(result =>{ 
                    client.close()
                    return callback(null, result)
                }
                ).catch(err => console.log(err)
                )
                
            }
        })
        
    })
}

const category = {
    name: "school",
    description: "Tasks related to school"
}

insertCat(category, (err, result) => {
    if (err){
        if (err === "ITEM ALREADY EXISTS") console.log("ITEM ALREADY EXISTS");

    }
    else{
        console.log('Success!')
        
    }
})